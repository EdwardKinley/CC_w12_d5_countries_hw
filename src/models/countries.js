const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countries = [];
};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get()
  .then((data) => {
    this.data = data;
    PubSub.publish('Countries:data-loaded', this.data);
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = Countries;
