// importing custom components
import DashboardContent from "../../components/DashboardContent/DashboardContent";

// dashboard component
export default function Dashboard() {
  return (
    <div className="dashboard md:flex my-5 p-5 md:p-10">
      <div className="dashboard-content md:w-2/5 bg-green-300">
        <DashboardContent />
      </div>

      <div className="dashboard-model md:w-3/5 bg-blue-400">Model</div>
    </div>
  );
}
