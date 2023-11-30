let rawData_ = [];
let filteredCountries_ = [];
let filteredSubregions_ = new Map();
let ogFilteredSubregions_ = new Map();



function formatNumber(number) {
  return new Intl.NumberFormat('en-US').format(number);
}


/* -------------------------------------------------------------------------- */
/*                           Get initial coutry list                          */
/* -------------------------------------------------------------------------- */


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
    // get rid of null values
    if (obj === null) {
      continue
    }
    let country = {
      name: obj.name.common,
      subregion: obj.subregion,
      capital: obj.capital?.join(', ') ?? "N/A",
      population: obj.population,
      area: obj.area ?? 0
    };
    filteredCountries_.push(country);
  }
}

/* -------------------------------------------------------------------------- */
/*                               Subregions List                              */
/* -------------------------------------------------------------------------- */

function createSubregionsList() {
  // Create Subregion Object
  for (let obj of rawData_) {
    let subreg = {
      subregion: obj.subregion,
      countries: [],
      population: 0,
      area: 0
    };
    filteredSubregions_.set(subreg.subregion, subreg);
  }

  for (let subregion of filteredSubregions_.values()) {
    for (let country of filteredCountries_) {
      if (country.subregion === subregion.subregion) {
        subregion.countries.push(country);
        subregion.population += country.population;
        subregion.area += country.area;
      }
    }
  }
  // Deep copy of filteredSubregions_ to ogFilteredSubregions_
  ogFilteredSubregions_ = JSON.parse(JSON.stringify(filteredSubregions_));



  HTMLPrint(1,10);
}




/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */
function pagination() {
  let page = 1;
  let number_of_pages = Math.ceil(filteredSubregions_.size / 10);
  let pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  let html = `
    <li class="page-item }">
      <button class="page-link" type="button" onclick="pageChange(-1)">Previous</button>
    </li>
  `;
  for (let i = 1; i <= number_of_pages; i++) {
    html += `
    <li class="page-item }">
      <button class="page-link" type="button" onclick="pageChange(${i})">${i}</button>
    </li>
    `;
  }
  html += `
    <li class="page-item }">
      <button class="page-link" type="button" onclick="pageChange(1)">Next</button>
    </li>
  `;
  pagination.innerHTML = html;
}
function pageChange(page) {
  let start = (page - 1) * 10;
  let finish = start + 10;
  HTMLPrint(start,finish);
  pagination();
}



function interface() {
  let number_of_characters = 0;


  const searchName = document.getElementById('search-name');
  searchName.addEventListener('keyup', () => {
    if (number_of_characters > searchName.value.length) {
      filteredSubregions_ = JSON.parse(JSON.stringify(ogFilteredSubregions_));
    }
    findByName(searchName.value);
    number_of_characters = searchName.value.length;
    HTMLPrint();
  });

  const searchCapital = document.getElementById('search-capital');
  searchCapital.addEventListener('keyup', () => {
    if (number_of_characters > searchCapital.value.length) {
      filteredSubregions_ = JSON.parse(JSON.stringify(ogFilteredSubregions_));
    }

    findByCapital(searchCapital.value);
    number_of_characters = searchCapital.value.length;
    HTMLPrint();
  });
  const searchPopulation = document.getElementById('search-population');
  searchPopulation.addEventListener('keyup', () => {
    if (number_of_characters > searchPopulation.value.length) {
      filteredSubregions_ = JSON.parse(JSON.stringify(ogFilteredSubregions_));
    }
    findByPopulation(searchPopulation.value);
    number_of_characters = searchPopulation.value.length;
    HTMLPrint();
  });
  const searchArea = document.getElementById('search-area');
  searchArea.addEventListener('keyup', () => {
    if (number_of_characters > searchArea.value.length) {
      filteredSubregions_ = JSON.parse(JSON.stringify(ogFilteredSubregions_));
    }
    findByArea(searchArea.value);
    number_of_characters = searchArea.value.length;
    HTMLPrint();
  }
  );

}



function findByName(name) {
  filteredSubregions_ = Array.from(filteredSubregions_.values())
    .map((subregion) => {
      subregion.countries = subregion?.countries?.filter((country) => {
        return country.name.toLowerCase().includes(name.toLowerCase());
      });
      return subregion;
    }
    ).filter((subregion) => subregion.countries.length > 0);
  HTMLPrint();
}
function findByCapital(capital) {
  filteredSubregions_ = Array.from(filteredSubregions_.values())
    .map((subregion) => {
      subregion.countries = subregion?.countries?.filter((country) => {
        return country.capital.toLowerCase().includes(capital.toLowerCase());
      });
      return subregion;
    }
    ).filter((subregion) => subregion.countries.length > 0);
  HTMLPrint();
}
function findByPopulation(population) {
  filteredSubregions_ = Array.from(filteredSubregions_.values())
    .map((subregion) => {
      subregion.countries = subregion?.countries?.filter((country) => {
        return country.population >= population;
      });
      return subregion;
    }
    ).filter((subregion) => subregion.countries.length > 0);
  HTMLPrint();
}
function findByArea(area) {
  filteredSubregions_ = Array.from(filteredSubregions_.values())
    .map((subregion) => {
      subregion.countries = subregion?.countries?.filter((country) => {
        return country.area >= area;
      });
      return subregion;
    }
    ).filter((subregion) => subregion.countries.length > 0);
  HTMLPrint();
}

/* -------------------------------------------------------------------------- */
/*                                 HTML Print                                 */
/* -------------------------------------------------------------------------- */

function HTMLPrint(start_,finish_) {
  //HTML
  let divSubregions = document.getElementById('subregions');
  divSubregions.innerHTML = '';
  let tempArray = Array.from(filteredSubregions_.values());

  start_ = start_ ?? 0;
  finish_ = finish_ ?? tempArray.length;

  start_ = Math.max(0, start_);
  finish_ = Math.min(tempArray.length, finish_);

  for (let i = start_ ?? 0; i < (finish_ ?? tempArray.length); i++) {
    let subregion = tempArray[i];
    // <div class="subregion">
    let divSubregion = document.createElement('div');
    let subregion_no_spaces = subregion?.subregion?.replaceAll(' ', '_');
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

function readJson() {
  let newObject = fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      rawData_ = data;
      createCountryList();
      sortCountries();
      createSubregionsList();
      pagination();
      interface();

    })
}

readJson();

