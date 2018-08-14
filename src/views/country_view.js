const PubSub = require('../helpers/pub_sub.js');
const CountryListView = require ('./country_list_view.js');

const CountryView = function (container, country) {
  this.container = container;
  this.country = country;
};

CountryView.prototype.render = function () {
  const countryContainer = document.createElement('div');
  countryContainer.classList.add('countryContainer');

  const flag = document.createElement('img');
  flag.setAttribute('src', this.country.flag);
  flag.setAttribute('height', '100rem');
  const nameClassName = this.country.name.split(' ').join('').replace(/[(.')]/g, '');
  flag.setAttribute('class', nameClassName);
  countryContainer.appendChild(flag);

  const name = document.createElement('h3');
  name.textContent = `${this.country.name}`;
  name.setAttribute('class', nameClassName);
  countryContainer.appendChild(name);

  const region = document.createElement('h5');
  region.textContent = `Region: ${this.country.region}`;
  region.addEventListener('click', (evt) => {
    console.log(`${this.country.region}`);
    // const countryListView = new CountryListView(this.container);
    // countryListView.renderByRegion(this.country.region);
  });
  const regionClassName = this.country.region.split(' ').join('').replace(/[(.')]/g, '');
  region.setAttribute('class', regionClassName);
  countryContainer.appendChild(region);

  const subregion = document.createElement('h5');
  subregion.textContent = `Subregion: ${this.country.subregion}`;
  const subregionClassName = this.country.subregion.split(' ').join('').replace(/[(.')]/g, '');
  subregion.setAttribute('class', subregionClassName);
  countryContainer.appendChild(subregion);

  const capital = document.createElement('h5');
  capital.textContent = `Capital: ${this.country.capital}`;
  countryContainer.appendChild(capital);

  const population = document.createElement('h5');
  const populationWithCommas = this.country.population.toLocaleString();
  population.textContent = `Population: ${populationWithCommas}`;
  countryContainer.appendChild(population);

  const area = document.createElement('h5');
  if (this.country.area) {
    area.textContent = `Area: ${this.country.area.toLocaleString()} sq km`;
  } else {
    area.textContent = `Area: `;
  };
  countryContainer.appendChild(area);

  this.container.appendChild(countryContainer);

  const nameClassElements = document.querySelectorAll(`.${nameClassName}`);
  if (nameClassElements) {
    nameClassElements.forEach (element => {
      element.addEventListener('click', (evt) => {
        console.log(`${this.country.name}!`);
        this.container.innerHTML='';
        this.render();
      });
    });
  };

  // this.setUpRegionLink();

};

// CountryView.prototype.setUpRegionLink = function () {
//   if (this.country.region) {
//     this.container.innerHTML='';
//     const regionClassName = this.country.region.split(' ').join('').replace(/[(.')]/g, '');
//     const regionClassElements = document.querySelectorAll(`.${regionClassName}`);
//     regionClassElements.forEach (element => {
//       element.addEventListener('click', (evt) => {
//         console.log(`${this.country.name}`);
//         this.render();
//       });
//     });
//   };
// };

module.exports = CountryView;
