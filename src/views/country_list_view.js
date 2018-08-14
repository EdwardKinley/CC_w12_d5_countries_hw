const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const CountryListView = function (container) {
  this.container = container;
};

CountryListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    this.countries = evt.detail;
    this.displayCountries(this.countries);
  });

  document.querySelector('h1').addEventListener('click', (evt) => {
    this.displayCountries(this.countries);
  });
};

CountryListView.prototype.displayCountries = function (countries) {
  var container = document.querySelector('.main');
  container.innerHTML = '';
  countries.forEach((country) => {
    const selectedCountry = country;
    var countryView = new CountryView(container, country);
    countryView.render();
  });
};

CountryListView.prototype.renderByRegion = function (region) {
  this.container.innerHTML='';
  const regionClassName = region.split(' ').join('').replace(/[(.')]/g, '');
  const regionClassElements = document.querySelectorAll(`.${regionClassName}`);
  regionClassElements.forEach (element => {
      console.log(element);
      element.render();
  });
};




module.exports = CountryListView;
