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

FormView.prototype.displayDropDown = function(countries) {
  var names = countries.map(country => country.name);
  var dropdown = document.querySelector('#dropdown');

  names.forEach((name, index) => {
    const option = document.createElement('option');
    option.textContent = `${name}`;
    option.value = index;
    dropdown.appendChild(option);
  });
};

module.exports = FormView;
