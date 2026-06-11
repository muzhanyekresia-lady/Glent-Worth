import { Link } from "react-router";

const highlights = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=600&h=380&fit=crop&auto=format",
    title: "Premium Meats",
    desc: "Ethically raised pork, beef, goat & lamb from our open pastures.",
    to: "/products",
    accent: "#8B6845",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=380&fit=crop&auto=format",
    title: "Fresh Vegetables",
    desc: "Seasonal organic produce hand-harvested and delivered fresh daily.",
    to: "/products",
    accent: "#4A5E2A",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1760108273033-0d789ef53d70?w=600&h=380&fit=crop&auto=format",
    title: "Oyster Mushrooms",
    desc: "Locally cultivated gourmet oyster mushrooms grown on-farm.",
    to: "/products",
    accent: "#8B6845",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?w=600&h=380&fit=crop&auto=format",
    title: "Venue & Events",
    desc: "Host weddings, parties & nature walks at our scenic farm venue.",
    to: "/venue",
    accent: "#4A5E2A",
  },
];

export function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1774345798599-3d59d17e4508?w=1800&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#3D2B1A",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,12,6,0.52) 0%, rgba(20,12,6,0.25) 45%, rgba(20,12,6,0.72) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "820px",
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#A8C070",
              letterSpacing: "0.22em",
              fontSize: "0.72rem",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            Family Farm &middot; Norton, Zimbabwe
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              lineHeight: 1.12,
              marginBottom: "1.5rem",
              fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
              fontWeight: 600,
            }}
          >
            Farm Fresh,{" "}
            <em style={{ fontStyle: "italic", color: "#C8D89A" }}>Straight</em>
            <br />
            to Your Table
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#E0D5C5",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              fontWeight: 300,
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
            }}
          >
            Quality meats, fresh vegetables, gourmet oyster mushrooms &amp; a
            stunning venue for weddings, parties &amp; nature walks — all from
            our family farm in the heart of Zimbabwe.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <Link
              to="/products"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#4A5E2A",
                color: "#FAF6F0",
                borderRadius: "0.375rem",
                padding: "0.875rem 2.25rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Shop Now
            </Link>
            <Link
              to="/venue"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#FAF6F0",
                border: "1.5px solid rgba(250,246,240,0.5)",
                borderRadius: "0.375rem",
                padding: "0.875rem 2.25rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              View Venue
            </Link>
          </div>
        </div>
        {/* Scroll line */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, transparent, rgba(250,246,240,0.55))",
            }}
          />
        </div>
      </section>

      {/* ── Highlights grid ── */}
      <section style={{ background: "#FAF6F0", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8B6845",
                letterSpacing: "0.2em",
                fontSize: "0.72rem",
                textTransform: "uppercase" as const,
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
              }}
            >
              Everything from the Farm
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {highlights.map((h) => (
              <Link
                key={h.id}
                to={h.to}
                style={{
                  background: "#FFF8F0",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 2px 14px rgba(44,24,16,0.07)",
                  transition: "transform 0.22s, box-shadow 0.22s",
                  display: "flex",
                  flexDirection: "column" as const,
                  border: "1px solid rgba(44,24,16,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 32px rgba(44,24,16,0.13)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 14px rgba(44,24,16,0.07)";
                }}
              >
                <div style={{ height: "200px", backgroundColor: "#E8DCC8", overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={h.img}
                    alt={h.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                  />
                </div>
                <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2C1810",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {h.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "#7A6350",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      fontWeight: 300,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {h.desc}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: h.accent,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner strip ── */}
      <section
        style={{
          background: "#4A5E2A",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: "1.25rem",
            }}
          >
            "From our land to your table — grown with love."
          </p>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(250,246,240,0.7)",
              fontSize: "0.9rem",
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            Proudly serving Norton, Zimbabwe and the surrounding region.
          </p>
          <a
            href="tel:+263774102310"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "#FAF6F0",
              color: "#2C1810",
              borderRadius: "0.375rem",
              padding: "0.875rem 2.25rem",
              letterSpacing: "0.09em",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              textDecoration: "none",
            }}
          >
            Call Us: +263 774 102 310
          </a>
        </div>
      </section>

      {/* ── Farm photo strip ── */}
      <section style={{ background: "#FAF6F0", padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8B6845",
                letterSpacing: "0.2em",
                fontSize: "0.72rem",
                textTransform: "uppercase" as const,
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              Norton, Zimbabwe
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              A Living Farm,
              <br />
              <em style={{ fontStyle: "italic", color: "#4A5E2A" }}>
                A Family Legacy
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#7A6350",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}
            >
              Since 1994, Glent Worth Farm has been a cornerstone of food
              production in the Norton area. We raise our livestock and grow our
              crops using sustainable, ethical methods that care for both people
              and the land.
            </p>
            <Link
              to="/about"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#4A5E2A",
                border: "1.5px solid #4A5E2A",
                borderRadius: "0.375rem",
                padding: "0.75rem 2rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              Our Story
            </Link>
          </div>
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              backgroundColor: "#C4B49A",
              boxShadow: "0 10px 40px rgba(44,24,16,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=800&h=600&fit=crop&auto=format"
              alt="Farmer tending crops at Glent Worth Farm"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
