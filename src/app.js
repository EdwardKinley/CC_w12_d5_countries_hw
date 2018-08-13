const Countries = require('./models/countries.js');
const CountryListView = require('./views/country_list_view.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formViewContainer = document.querySelector('.top');
  const formView = new FormView(formViewContainer);
  formView.bindEvents();

  const countryListViewContainer = document.querySelector('.main');
  const countryListView = new CountryListView(countryListViewContainer);
  countryListView.bindEvents();

  const countries = new Countries();
  countries.getData();
});
