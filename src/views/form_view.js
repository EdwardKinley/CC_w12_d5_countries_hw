const PubSub = require('../helpers/pub_sub.js');

const FormView = function (container) {
  this.container = container;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    this.countries = evt.detail;
    console.log(this.countries);
    this.displayDropDown(this.countries);
  });
};



module.exports = FormView;
