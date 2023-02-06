// importing libraries
import { Typography } from "@mui/material";

// dashboard content component
export default function DashboardContent() {
  return (
    <div className="dashboardContent p-5 mb-5 md:mb-0">
      <div className="dashboardContent-header mb-5">
        <Typography variant="h4">Dashboard</Typography>
      </div>

      <div className="dashboardContent-search">Search</div>
    </div>
  );
}
