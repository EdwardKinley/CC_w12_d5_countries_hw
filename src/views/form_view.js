const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');
const CountryListView = require('./country_list_view.js');

const FormView = function (container) {
  this.container = container;
  this.countries = [];
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    this.countries = evt.detail;
    this.displayDropDown(this.countries);

    this.regions = this.countries.map(country => country.region);
    this.regionsReal = this.regions.filter(region => region);
    this.regionsUnique = this.regionsReal.filter((region, index, regions) => regions.indexOf(region) === index).sort();
    this.regionsUnique.push('other/none/unknown/etc');
    this.displayRegionDropDown(this.regionsUnique);

    this.subregions = this.countries.map(country => country.subregion);
    this.subregionsReal = this.subregions.filter(subregion => subregion);
    this.subregionsUnique = this.subregionsReal.filter((subregion, index, subregions) => subregions.indexOf(subregion) === index);
    // this.displaySubregionDropDown(this.subregionsUnique);
  });

  document.querySelector('#dropdown').addEventListener('change', (evt) => {
    var container = document.querySelector('.main');
    container.innerHTML = '';
    const selectedCountry = evt.target.value;
    var countryView = new CountryView(container, this.countries[selectedCountry]);
    countryView.render();
  });

  document.querySelector('#region-dropdown').addEventListener('change', (evt) => {
    var container = document.querySelector('.main');
    const selectedRegion = evt.target.value;
    console.log(`you have selected region ${selectedRegion}`);
    const countries = this.filterCountriesByRegion(this.countries, selectedRegion);
    console.log(countries);
    container.innerHTML = '';
    countries.forEach((country) => {
      const countryView = new CountryView(container, country);
      countryView.render();
    });
  });
};

FormView.prototype.filterCountriesByRegion = function (countries, region) {
  // if (region = 'other/none/unknown/etc') { return  };
  return countries.filter(country => country.region === region);
};

FormView.prototype.displayDropDown = function(countries) {
  var names = countries.map(country => country.name);
  var dropdown = document.querySelector('#dropdown');

  names.forEach((name, index) => {
    const option = document.createElement('option');
    option.textContent = name;
    option.value = index;
    dropdown.appendChild(option);
  });
};

FormView.prototype.displayRegionDropDown = function(regions) {
  var dropdown = document.querySelector('#region-dropdown');

  regions.forEach((region, index) => {
    const number = this.filterCountriesByRegion(this.countries, region).length;
    const option = document.createElement('option');
    option.textContent = `${region} (${number})`;
    option.value = region;
    dropdown.appendChild(option);
  });
};

module.exports = FormView;
