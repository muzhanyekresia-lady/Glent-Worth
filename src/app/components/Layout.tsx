import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#FAF6F0", minHeight: "100vh", display: "flex", flexDirection: "column" as const }}>
      {/* Navbar is absolute on home (over hero), sticky on other pages */}
      {isHome ? (
        <div style={{ position: "relative" }}>
          <Navbar />
        </div>
      ) : (
        <Navbar />
      )}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
