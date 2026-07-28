import "../styles/Header.css";

function Header() {
  const today = new Date();

  return (
    <div className="header">
      <div>
        <h2>AI-NOC Dashboard</h2>
        <p>{today.toDateString()}</p>
      </div>

      <div className="profile">
        <span>👩‍💻 Admin</span>
      </div>
    </div>
  );
}

export default Header;