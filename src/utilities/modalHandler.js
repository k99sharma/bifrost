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

  // add values in holders

  // country flag holder
  const flagUrl = data.flags.png;
  flagHolder.innerHTML = `<img class="img-fluid" src="${flagUrl}" alt="country flag" />`;

  // country name value
  const name = data.name.common ? data.name.common : "-";
  const countryCode = data.flag ? data.flag : "-";
  nameHolder.innerHTML = `<h5>${name} (${countryCode})</h5>`;

  // country capital value
  const capital = data.capital[0] ? data.capital[0] : "-";
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
}

export default handleModal;
