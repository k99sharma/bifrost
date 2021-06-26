// import supporting utilities
import fetchCountryData from "./fetch.js"; // function to fetch data from bifrost api
import alertHandler from "./alert.js"; // function to handle alerts
import handleModal from "./modalHandler.js"; // function to handle modal

// form monitoring function
function handleForm(world) {
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

export default handleForm;
