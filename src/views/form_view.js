const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const FormView = function (container) {
  this.container = container;
  this.countries = [];
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    this.countries = evt.detail;
    this.displayDropDown(this.countries);
    this.displayCountries(this.countries);
  });

  document.querySelector('#dropdown').addEventListener('change', (evt) => {
    var container = document.querySelector('.main');
    container.innerHTML = '';
    const selectedCountry = evt.target.value;
    var countryView = new CountryView(container, this.countries[selectedCountry]);
    countryView.render();
  });

  document.querySelector('h1').addEventListener('click', (evt) => {
    this.displayCountries(this.countries);
  });
};

FormView.prototype.displayCountries = function (countries) {
  var container = document.querySelector('.main');
  container.innerHTML = '';
  countries.forEach((country) => {
    const selectedCountry = country;
    var countryView = new CountryView(container, country);
    countryView.render();
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
