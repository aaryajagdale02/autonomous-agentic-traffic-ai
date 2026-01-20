import { NavLink } from "react-router-dom";

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "60px",
  backgroundColor: "#1a1a2e",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
};

const titleStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#ffffff",
  margin: 0,
};

const navLinksStyle = {
  display: "flex",
  gap: "1.5rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: "#b8b8d4",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  transition: "all 0.2s ease",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#ffffff",
  backgroundColor: "#16213e",
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Autonomous Agentic AI Traffic System</h1>
      <ul style={navLinksStyle}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/input"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
          >
            Input
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/results"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
          >
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
