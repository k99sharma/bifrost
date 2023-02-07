// importing libraries
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";

// importing custom components
import SearchBar from "../SearchBar/SearchBar";

// import context
import DashboardContext from "../../context/dashboardContext";

// dashboard content component
export default function DashboardContent() {
  // context
  const dashboardCtx = useContext(DashboardContext);

  // search for details if search value changes
  useEffect(() => {
    console.log(dashboardCtx.currentSearch);
  }, [dashboardCtx.currentSearch]);

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
