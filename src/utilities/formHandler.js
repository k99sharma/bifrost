// import supporting utilities
import fetchCountryData from "./fetch.js"; // function to fetch data from bifrost api
import alertHandler from "./alert.js"; // function to handle alerts
import handleModal from "./modalHandler.js"; // function to handle modal
import isGood from "./validator.js"; // function to validate user input

// form monitoring function
function handleForm(world) {
  // look for submission on form
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let countryName = event.target.elements.country.value;
    const refactoredInput = isGood(countryName); // validating input string

    // if input is correct
    if (refactoredInput) {
      const dataJSON = await fetchCountryData(refactoredInput); // fetching data

      if (dataJSON) {
        world.findLocation(dataJSON.latlng[0], dataJSON.latlng[1]); // finding and marking location of country on 3D globe

        // function to handle modal
        handleModal(dataJSON);

        alertHandler("success"); // success alert
      } else {
        alertHandler("failed"); // unsuccesful alert
      }
    } else {
      // wrong input
      alertHandler("warning");
    }
  });
}

export default handleForm;
