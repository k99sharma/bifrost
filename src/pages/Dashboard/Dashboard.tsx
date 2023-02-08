// importing libraries
import { useState, useEffect } from "react";

// importing custom components
import DashboardContent from "../../components/DashboardContent/DashboardContent";

// importing helpers
import { searchCountry } from "../../utilities/helper";

// dashboard component
export default function Dashboard() {
  // states
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryData, setCountryData] = useState<any | null>(null);

  // search for details if search value changes
  useEffect(() => {
    if (countryCode === null) {
      setCountryData(null);
      return;
    }

    // function to fetch data
    async function fetchData() {
      const res = await searchCountry(countryCode);
      // filter need data
      const data = {
        name: res[0].name.common,
        population: res[0].population,
        region: res[0].region,
        timezones: res[0].timezones,
        latlng: res[0].latlng,
        flags: res[0].flags,
        continents: res[0].continents,
        currencies: res[0].currencies,
        capital: res[0].capital,
        borders: res[0].borders,
        area: res[0].area,
      };

      setCountryData(data);
    }
    fetchData(); // fetching data
  }, [countryCode]);

  return (
    <div className="dashboard md:flex my-5 p-5 md:p-10">
      <div className="dashboard-content md:w-1/3">
        <DashboardContent
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          countryData={countryData}
          setCountryData={setCountryData}
        />
      </div>

      <div className="dashboard-model md:w-2/3 bg-blue-400">Model</div>
    </div>
  );
}
