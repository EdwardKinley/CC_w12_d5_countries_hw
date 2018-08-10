const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container, country) {
  this.container = container;
  this.country = country;
};

CountryView.prototype.render = function () {
  const name = document.createElement('h3');
  name.textContent = `${this.country.name}`;
  this.container.appendChild(name);
};

module.exports = CountryView;
