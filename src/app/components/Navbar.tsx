import { useState } from "react";
import { NavLink, useLocation } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/venue", label: "Venue" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const bg = isHome ? "transparent" : "#2C1810";
  const shadow = isHome ? "none" : "0 2px 20px rgba(0,0,0,0.2)";

  return (
    <nav
      style={{
        position: isHome ? "absolute" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: bg,
        boxShadow: shadow,
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 26C6 26 8 14 20 10C20 10 24 8 28 6C28 6 26 10 24 14C22 18 18 22 12 24L6 26Z"
              fill="#A8C070"
            />
            <path d="M6 26L14 18" stroke="#A8C070" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FAF6F0",
                fontSize: "1.05rem",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "0.01em",
              }}
            >
              Glent Worth Farm
            </div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#A8C070",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
              }}
            >
              Norton, Zimbabwe
            </div>
          </div>
        </NavLink>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                fontFamily: "'Lato', sans-serif",
                color: isActive ? "#A8C070" : "rgba(250,246,240,0.8)",
                fontSize: "0.8rem",
                fontWeight: isActive ? 700 : 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                padding: "0.5rem 0.9rem",
                borderRadius: "0.25rem",
                transition: "color 0.2s",
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/products"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "#4A5E2A",
              color: "#FAF6F0",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              padding: "0.55rem 1.4rem",
              borderRadius: "0.25rem",
              marginLeft: "0.5rem",
              transition: "background 0.2s",
            }}
          >
            Shop Now
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#FAF6F0",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#1E0F08",
            borderTop: "1px solid rgba(250,246,240,0.08)",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'Lato', sans-serif",
                color: isActive ? "#A8C070" : "rgba(250,246,240,0.8)",
                fontSize: "0.9rem",
                fontWeight: isActive ? 700 : 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(250,246,240,0.06)",
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "#4A5E2A",
              color: "#FAF6F0",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.25rem",
              marginTop: "0.75rem",
              textAlign: "center" as const,
            }}
          >
            Shop Now
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
