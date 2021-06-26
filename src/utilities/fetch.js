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

export default fetchCountryData;
