// importing custom components
import DashboardContent from "../../components/DashboardContent/DashboardContent";

// dashboard component
export default function Dashboard() {
  return (
    <div className="dashboard md:flex my-5 p-5 md:p-10">
      <div className="dashboard-content md:w-1/3 bg-green-300">
        <DashboardContent />
      </div>

      <div className="dashboard-model md:w-2/3 bg-blue-400">Model</div>
    </div>
  );
}
