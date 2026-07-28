import "../styles/Dashboard.css";

function AlertsPanel() {

  const alerts = [
    {
      id: 1,
      message: "Router is connected successfully",
      level: "Info"
    },
    {
      id: 2,
      message: "All devices are online",
      level: "Success"
    },
    {
      id: 3,
      message: "No network threats detected",
      level: "Safe"
    }
  ];

  return (

    <div className="alerts-panel">

      <h2>Recent Alerts</h2>

      {alerts.map((alert) => (

        <div className="alert-card" key={alert.id}>

          <h4>{alert.level}</h4>

          <p>{alert.message}</p>

        </div>

      ))}

    </div>

  );

}

export default AlertsPanel;