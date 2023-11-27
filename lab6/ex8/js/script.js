let rawData_ = [];
let filteredCountries_ = [];
let filteredSubregions_ = new Map();

function formatNumber(number) {
  return new Intl.NumberFormat('en-US').format(number);
}

function sortCountries() {
  filteredCountries_.sort((a, b) => {
    if (a.subregion < b.subregion) {
      return -1;
    } else if (a.subregion > b.subregion) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}


function createCountryList() {
  for (let obj of rawData_) {
    let country = {
      name: obj.name.common,
      subregion: obj.subregion,
      capital: obj.capital,
      population: obj.population,
      area: obj.area
    };
    filteredCountries_.push(country);
  }
  // console.log(filteredCountries_);
}

/* ------------------------------- JAPIERDOLA ------------------------------- */

function createSubregionsList() {
  // Create Subregion Object
  for (let obj of rawData_) {
    let subreg = {
      subregion: obj.subregion,
      countries: [],
      population: 0
    };
    filteredSubregions_.set(subreg.subregion, subreg);
    
  }
  
  for (let subregion of filteredSubregions_.values()) {
    for (let country of filteredCountries_) {
      if (country.subregion == subregion.subregion) {
        subregion.countries.push(country);
        subregion.population += country.population;
        console.log(country.area);
        subregion.area += parseInt(country.area);
      }
    }
  }

  // HTML
  let divSubregions = document.getElementById('subregions');
  divSubregions.innerHTML = '';
  for (let subregion of filteredSubregions_.values()) {
    // <div class="subregion">
    let divSubregion = document.createElement('div');
    let subregion_no_spaces = subregion.subregion.replaceAll(' ', '_');
    divSubregion.className = 'subregion';
    let html =
      `<button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#${subregion_no_spaces}" aria-expanded="false" aria-controls="${subregion_no_spaces}">
          <div class="d-flex justify-content-between">    
            <span class="col-6">${subregion.subregion}</span>
            <span class="col-3">${formatNumber(subregion.population)}</span>
            <span class="col-3">${subregion.area}</span>
          </div>
        </button>
        <div class="collapse" id="${subregion_no_spaces}">
          <div class="card card-body">
      `

    for (let country of subregion.countries) {
      html += `
            <div class="d-flex justify-content-between text-center">
              <span class="col-3">${country.name}</span>
              <span class="col-3">${country.capital}</span>
              <span class="col-3">${formatNumber(country.population)}</span>
              <span class="col-3">${country.area}</span>
              </div>
            `
    }

    html += `
          </div>
        </div>
      `;

    // </div
    divSubregion.innerHTML = html;
    divSubregions.appendChild(divSubregion);
  }

}


function interface() {
  const searachedCountry = document.getElementById('searchedCountry').value;
  const searchedCapital = document.getElementById('searchedCapital').value;
  const searchedArea = document.getElementById('searchedArea').value;

  const sortByName = document.getAttribute('data-sortordname');
  const sortByCapital = document.getAttribute('data-sortordcapital');
  const sortOByArea = document.getAttribute('data-sortordarea');


}







function readJson() {
  let newObject = fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      rawData_ = data;
      createCountryList();
      sortCountries();
      createSubregionsList();

    })
}

readJson();

