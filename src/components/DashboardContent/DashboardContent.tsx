// importing libraries
import { Typography } from "@mui/material";

// importing custom components
import SearchBar from "../SearchBar/SearchBar";
import CountryInformation from "../CountryInformation/CountryInformation";

// importing types
import { DashboardContentType } from "../../utilities/types";

// dashboard content component
export default function DashboardContent({
  countryData,
  setCountryCode,
}: DashboardContentType) {
  return (
    <div className="dashboardContent p-5 mb-5 md:mb-0">
      <div className="dashboardContent-header mb-5">
        <div className="dashboardContent-header-heading mb-2">
          <Typography variant="h4">Dashboard</Typography>
        </div>

        <div className="dashboardContent-header-subheading">
          Explore countries
        </div>
      </div>

      <div className="dashboardContent-search">
        <SearchBar setCode={setCountryCode} />
      </div>

      <div className="dashboardContent-modal">
        <CountryInformation countryData={countryData} />
      </div>
    </div>
  );
}
