const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container, country) {
  this.container = container;
  this.country = country;
};

CountryView.prototype.render = function () {
  const countryContainer = document.createElement('div');
  countryContainer.classList.add('countryContainer');

  const name = document.createElement('h3');
  name.textContent = `${this.country.name}`;
  countryContainer.appendChild(name);

  const region = document.createElement('h5');
  region.textContent = `Region: ${this.country.region}`;
  countryContainer.appendChild(region);

  const subregion = document.createElement('h5');
  subregion.textContent = `Subregion: ${this.country.subregion}`;
  countryContainer.appendChild(subregion);

  const capital = document.createElement('h5');
  capital.textContent = `Capital: ${this.country.capital}`;
  countryContainer.appendChild(capital);

  const population = document.createElement('h5');
  population.textContent = `Population: ${this.country.population}`;
  countryContainer.appendChild(population);

  const area = document.createElement('h5');
  area.textContent = `Area: ${this.country.area} sq km`;
  countryContainer.appendChild(area);

  this.container.appendChild(countryContainer);
};

module.exports = CountryView;
