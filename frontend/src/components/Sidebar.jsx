import {
  FaTachometerAlt,
  FaNetworkWired,
  FaChartLine,
  FaBell,
  FaFileAlt,
  FaSignOutAlt
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">AI-NOC</h2>

      <ul>

        <li>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </li>

        <li>
          <FaNetworkWired />
          <span>Network</span>
        </li>

        <li>
          <FaChartLine />
          <span>Monitoring</span>
        </li>

        <li>
          <FaBell />
          <span>Alerts</span>
        </li>

        <li>
          <FaFileAlt />
          <span>Reports</span>
        </li>

      </ul>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;