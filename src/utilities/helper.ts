// function to search for a country based on code
export async function searchCountry(code: string | null) {
  if (code === null) return null;

  // destructuring search value
  const apiUrl = `https://restcountries.com/v3.1/alpha/${code}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function hi() {}
