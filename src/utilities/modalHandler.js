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

export default handleModal;
