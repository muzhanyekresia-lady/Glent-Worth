import { NavLink } from "react-router";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.02a8.16 8.16 0 0 0 4.77 1.53V7.11a4.85 4.85 0 0 1-1-.42z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "TikTok", href: "https://tiktok.com", icon: <TikTokIcon /> },
];

export function Footer() {
  return (
    <footer style={{ background: "#1E0F08", padding: "5rem 2rem 2.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M6 26C6 26 8 14 20 10C20 10 24 8 28 6C28 6 26 10 24 14C22 18 18 22 12 24L6 26Z" fill="#A8C070" />
                <path d="M6 26L14 18" stroke="#A8C070" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#FAF6F0", fontSize: "1rem", fontWeight: 700 }}>
                Glent Worth Farm
              </span>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#9A8070", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "0.5rem" }}>
              A family farm rooted in the heart of Norton, Zimbabwe.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#6A5848", fontSize: "0.8rem", fontWeight: 300, marginBottom: "1.5rem" }}>
              Est. 1994
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(250,246,240,0.07)",
                    border: "1px solid rgba(250,246,240,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C4B49A",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(168,192,112,0.18)";
                    el.style.color = "#A8C070";
                    el.style.borderColor = "rgba(168,192,112,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(250,246,240,0.07)";
                    el.style.color = "#C4B49A";
                    el.style.borderColor = "rgba(250,246,240,0.1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#FAF6F0", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
              Quick Links
            </p>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/venue", label: "Venue & Events" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={{
                  display: "block",
                  fontFamily: "'Lato', sans-serif",
                  color: "#9A8070",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  textDecoration: "none",
                  marginBottom: "0.8rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAF6F0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9A8070")}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Products */}
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#FAF6F0", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
              Products
            </p>
            {["Premium Meats", "Fresh Vegetables", "Oyster Mushrooms", "Equipment Hire"].map((item) => (
              <p key={item} style={{ fontFamily: "'Lato', sans-serif", color: "#9A8070", fontSize: "0.88rem", fontWeight: 300, marginBottom: "0.8rem" }}>
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#FAF6F0", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
              Get In Touch
            </p>
            {[
              { label: "Phone", value: "+263 774 102 310" },
              { label: "Email", value: "info@glentworthfarm.co.zw" },
              { label: "Location", value: "Norton, Zimbabwe" },
            ].map((c) => (
              <div key={c.label} style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", color: "#A8C070", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "0.2rem" }}>
                  {c.label}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: "#C4B49A", fontSize: "0.88rem", fontWeight: 300 }}>
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(250,246,240,0.07)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap" as const,
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#5A4838", fontSize: "0.78rem", fontWeight: 300 }}>
            © 2026 Glent Worth Farm · Norton, Zimbabwe · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Lato', sans-serif", color: "#5A4838", fontSize: "0.75rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8C070")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#5A4838")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
