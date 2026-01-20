import Navbar from "./Navbar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyle = {
  marginTop: "60px",
  flex: 1,
  padding: "2rem",
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>{children}</main>
    </div>
  );
}

export default Layout;
