const Countries = require('./models/countries.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formViewContainer = document.querySelector('.top');
  const formView = new FormView(formViewContainer);
  formView.bindEvents();

  const countries = new Countries();
  countries.getData();
});
