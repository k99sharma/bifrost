// importing libraries
import { Typography } from "@mui/material";

// importing custom components
import SearchBar from "../SearchBar/SearchBar";

// dashboard content component
export default function DashboardContent() {
  return (
    <div className="dashboardContent p-5 mb-5 md:mb-0">
      <div className="dashboardContent-header mb-5">
        <div className="dashboardContent-header-heading mb-2">
          <Typography variant="h4">Dashboard</Typography>
        </div>

        <div className="dashboardContent-header-subheading">
          Learn more about countries
        </div>
      </div>

      <div className="dashboardContent-search">
        <SearchBar />
      </div>
    </div>
  );
}
