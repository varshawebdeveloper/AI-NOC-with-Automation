import "../styles/Dashboard.css";

function NetworkStatus() {
  return (
    <div className="network-status">

      <h2>Network Status</h2>

      <div className="status-grid">

        <div className="status-box">
          <h3>Bandwidth</h3>
          <p>120 Mbps</p>
        </div>

        <div className="status-box">
          <h3>Latency</h3>
          <p>8 ms</p>
        </div>

        <div className="status-box">
          <h3>Packet Loss</h3>
          <p>0%</p>
        </div>

        <div className="status-box">
          <h3>CPU Usage</h3>
          <p>35%</p>
        </div>

      </div>

    </div>
  );
}

export default NetworkStatus;