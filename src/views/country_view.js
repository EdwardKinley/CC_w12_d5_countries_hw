const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container, country) {
  this.container = container;
  this.country = country;
};

CountryView.prototype.render = function () {
  const name = document.createElement('h3');
  name.textContent = `${this.country.name}`;
  this.container.appendChild(name);

  const region = document.createElement('h5');
  region.textContent = `Region: ${this.country.region}`;
  this.container.appendChild(region);

  const subregion = document.createElement('h5');
  subregion.textContent = `Subregion: ${this.country.subregion}`;
  this.container.appendChild(subregion);

  const capital = document.createElement('h5');
  capital.textContent = `Capital: ${this.country.capital}`;
  this.container.appendChild(capital);

  const population = document.createElement('h5');
  population.textContent = `Population: ${this.country.population}`;
  this.container.appendChild(population);

  const area = document.createElement('h5');
  area.textContent = `Area: ${this.country.area} sq km`;
  this.container.appendChild(area);

  console.log(this.country);
};

module.exports = CountryView;
