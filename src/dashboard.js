import { World } from "./World/World.js";

// function to create model
let world;

function createModel() {
  const modelContainer = document.querySelector("#scene");

  world = new World(modelContainer); // new world instance

  world.start(); // start world
}

//  funtion to fetch data from bifrost api
async function fetchCountryData(name) {
  // api url
  const API_url =
    "https://ghost-32-bifrost.herokuapp.com/bifrost/v1.0/country?name=";
  const response = await fetch(`${API_url}${name}`);

  if (response.ok) {
    // converting response into json
    const data = await response.json();

    return data;
  }

  return null;
}

// function to create alert
function alertHandler(status) {
  const successAlert = document.querySelector(".alert-success"); // alert success
  const dangerAlert = document.querySelector(".alert-danger"); // alert danger

  if (status === "success") {
    successAlert.classList.toggle("d-none");
  } else {
    dangerAlert.classList.toggle("d-none");
  }
}

// function to handle modal
function handleModal(data) {
  // enabling country details button
  const countryDetailsButton = document.querySelector("#countryDetailsButton");
  countryDetailsButton.disabled = false; // enabled button

  // modal value holders
  const flagHolder = document.querySelector("#countryFlagHolder");
  const nameHolder = document.querySelector("#countryName_value");
  const capitalHolder = document.querySelector("#countryCapital_value");
  const regionHolder = document.querySelector("#countryRegion_value");
  const subregionHolder = document.querySelector("#countrySubregion_value");
  const areaHolder = document.querySelector("#countryArea_value");
  const currencySymbolHolder = document.querySelector(
    "#countryCurrencySymbol_value"
  );
  const currencyNameHolder = document.querySelector(
    "#countryCurrencyName_value"
  );

  // add values in holders

  // country flag holder
  const flagUrl = data.flag;
  flagHolder.innerHTML = `<img class="img-fluid" src="${flagUrl}" alt="country flag" />`;

  // country name value
  const name = data.name ? data.name : "-";
  const countryCode = data.code ? data.code : "-";
  nameHolder.innerHTML = `<h5>${name} (${countryCode})</h5>`;

  // country capital value
  const capital = data.capital ? data.capital : "-";
  capitalHolder.innerHTML = `<h5>${capital}</h5>`;

  // country region value
  const region = data.region ? data.region : "-";
  regionHolder.innerHTML = `<h5>${region}</h5>`;

  // country subregion value
  const subregion = data.subregion ? data.subregion : "-";
  subregionHolder.innerHTML = `<h5>${subregion}</h5>`;

  // country area value
  const area = data.area ? data.area : "-";
  areaHolder.innerHTML = `<h5>${area} sq km</h5>`;

  // country currency symbol value
  const currencySymbol = data.currencies[0].symbol
    ? data.currencies[0].symbol
    : "-";
  currencySymbolHolder.innerHTML = `<h5>${currencySymbol}</h5>`;

  // country currency name value
  const currencyName = data.currencies[0].name ? data.currencies[0].name : "-";
  const currencyCode = data.currencies[0].code ? data.currencies[0].code : "-";
  currencyNameHolder.innerHTML = `<h5>${currencyName} (${currencyCode})</h5>`;
}

// form monitoring function
function formMonitor() {
  // look for submission on form
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const countryName = event.target.elements.country.value;

    const dataJSON = await fetchCountryData(countryName);

    if (dataJSON) {
      world.findLocation(dataJSON.latlng[0], dataJSON.latlng[1]);

      // function to handle modal
      handleModal(dataJSON);

      alertHandler("success");
    } else {
      alertHandler("failed");
    }
  });
}

// main function
function main() {
  createModel();

  formMonitor();
}

main();
