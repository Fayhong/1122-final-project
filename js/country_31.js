// import { products_31, all_products_31 } from './js/productsData_31.js';


const url = './api/countryData.json';

let country_31 = [];

const countryContainer = document.querySelector(".country-container");

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('fetchData', data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// console.log("country_31", country_31);

const displayCountry = (countries) => {
  let countryContent = countries
    .map((country) => {
      const { iso2, capital, currency, region, img } = country;
      return `
      <div class="single-country">
        <img
          src="https://flagcdn.com/${iso2.toLowerCase()}.svg"
          class="single-country-img img"
          alt="${iso2} flag"
        />
        <footer>
          <h3 class="title">${iso2}</h3>
          <span class="capital">${capital}</span>
          <h4 class="title">${currency}</h4> 
          <h5 class="title">${region}</h5>
        </footer>
      </div>
      `;
    })
    .join("");
  countryContainer.innerHTML = countryContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  country_31 = await fetchData(url);
  displayCountry(country_31);
});
