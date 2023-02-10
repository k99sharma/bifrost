// importing country code
import fetchCountryCode from "../utilities/countryCode.js";

async function fetchCountryData(name) {
  const code = fetchCountryCode(name); // getting code

  // api url
  const API_url = `https://restcountries.com/v3.1/alpha/${code}`;
  const response = await fetch(API_url);

  if (response.ok) {
    // converting response into json
    const data = await response.json();
    alert("Gotcha!");
    return data[0];
  }

  return null;
}

export default fetchCountryData;
