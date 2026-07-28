import "../styles/Dashboard.css";

function DeviceTable() {

  const devices = [
    { name: "Router", ip: "192.168.10.1", status: "🟢 Online" },
    { name: "PC1", ip: "192.168.10.2", status: "🟢 Online" },
    { name: "PC2", ip: "192.168.10.3", status: "🟢 Online" },
    { name: "Server", ip: "192.168.10.4", status: "🟢 Online" }
  ];

  return (

    <div className="table-container">

      <h2>Connected Devices</h2>

      <table>

        <thead>

          <tr>
            <th>Device</th>
            <th>IP Address</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {devices.map((device,index)=>(

            <tr key={index}>

              <td>{device.name}</td>

              <td>{device.ip}</td>

              <td>{device.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default DeviceTable;