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

  document.querySelector('#dropdown').addEventListener('change', (evt) => {
    var container = document.querySelector('.main');
    container.innerHTML = '';
    const selectedCountry = evt.target.value;
    console.log(selectedCountry);
    var name = document.createElement('p');
    name.textContent = selectedCountry;
    container.appendChild(name);
  });
};

FormView.prototype.displayDropDown = function(countries) {
  var names = countries.map(country => country.name);
  var dropdown = document.querySelector('#dropdown');

  names.forEach((name, index) => {
    const option = document.createElement('option');
    option.textContent = `${name}`;
    option.value = name;
    dropdown.appendChild(option);
  });
};

module.exports = FormView;
