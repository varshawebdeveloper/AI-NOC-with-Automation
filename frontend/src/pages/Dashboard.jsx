import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import DeviceTable from "../components/DeviceTable";
import AlertsPanel from "../components/AlertsPanel";
import NetworkStatus from "../components/NetworkStatus";

import "../styles/Dashboard.css";

function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Header />
<div className="cards">

    <StatCard title="Total Devices" value="04" />

    <StatCard title="Online Devices" value="04" />

    <StatCard title="Alerts" value="00" />

    <StatCard title="Network Health" value="98%" />

</div>

        <DeviceTable />
        <AlertsPanel />
        <NetworkStatus />

      </div>

    </div>

  );

}

export default Dashboard;;