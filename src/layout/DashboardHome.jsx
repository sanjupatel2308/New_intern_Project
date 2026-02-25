import StatsCard from "../Components/StatsCard";



const DashboardHome = () => {
  return (
    <div className="stats-grid">
      <StatsCard title="Total Users" value="25" />
      <StatsCard title="Active Users" value="18" />
      <StatsCard title="New Today" value="3" />
    </div>
  );
};

export default DashboardHome;