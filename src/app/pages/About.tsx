import { Link } from "react-router";

const values = [
  {
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=600&h=420&fit=crop&auto=format",
    title: "Sustainable Farming",
    desc: "We nurture the land using time-tested methods that preserve soil health and protect Zimbabwe's natural environment for future generations.",
  },
  {
    img: "https://images.unsplash.com/photo-1734255026082-82fdc81991f0?w=600&h=420&fit=crop&auto=format",
    title: "Community First",
    desc: "We supply local households, restaurants and markets in Norton and beyond, reinvesting in the community that has supported us.",
  },
  {
    img: "https://images.unsplash.com/photo-1774828732384-6c0134c29425?w=600&h=420&fit=crop&auto=format",
    title: "Ethical Animal Care",
    desc: "Our livestock roam freely on open pastures. No overcrowding, no shortcuts — just animals raised with space, dignity and proper nutrition.",
  },
  {
    img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=600&h=420&fit=crop&auto=format",
    title: "No Chemicals",
    desc: "Our vegetables and mushrooms are grown without synthetic pesticides or fertilisers, so what reaches your table is genuinely clean food.",
  },
];

const milestones = [
  { year: "1994", text: "Glent Worth Farm founded by the Glentworth family in Norton, Zimbabwe." },
  { year: "2001", text: "Expanded to include a full free-range livestock programme." },
  { year: "2008", text: "Launched our fresh vegetable delivery service to local households." },
  { year: "2014", text: "Introduced our gourmet oyster mushroom cultivation unit." },
  { year: "2019", text: "Opened the farm venue for weddings, parties & nature experiences." },
  { year: "2024", text: "Celebrating 30 years of feeding families across Zimbabwe." },
];

export function About() {
  return (
    <div>
      {/* ── Page hero ── */}
      <section
        style={{
          position: "relative",
          height: "480px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1655981649945-cbd213e524c4?w=1600&h=800&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,12,6,0.6)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#A8C070",
              letterSpacing: "0.22em",
              fontSize: "0.72rem",
              textTransform: "uppercase" as const,
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            About Glent Worth Farm
          </h1>
        </div>
      </section>

      {/* ── Story section ── */}
      <section style={{ background: "#FAF6F0", padding: "5.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Stacked image pair */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 12px 48px rgba(44,24,16,0.12)",
                backgroundColor: "#C4B49A",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?w=800&h=600&fit=crop&auto=format"
                alt="Farmer tending crops at Glent Worth Farm, Norton Zimbabwe"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                aspectRatio: "16/7",
                boxShadow: "0 8px 32px rgba(44,24,16,0.1)",
                backgroundColor: "#D6E8C8",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1744726006622-f31b79d86642?w=800&h=350&fit=crop&auto=format"
                alt="Lush vegetable garden growing in a Zimbabwean farm field"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
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
              Norton, Zimbabwe · Est. 1994
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
              Rooted in the Heart of{" "}
              <em style={{ fontStyle: "italic", color: "#4A5E2A" }}>Zimbabwe</em>
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#7A6350",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1rem",
              }}
            >
              Glent Worth Farm was established in 1994 in Norton, Zimbabwe — a town
              known for its rich agricultural land and hardworking community. What started
              as a modest family homestead has grown into one of the area's most trusted
              sources of premium farm produce.
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#7A6350",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1rem",
              }}
            >
              We raise free-range pork, beef, goat and lamb on our open pastures. Our
              fertile fields produce a seasonal rotation of fresh vegetables. And our
              carefully managed growing houses cultivate premium oyster mushrooms year-round.
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#7A6350",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Beyond the farm, our venue hosts weddings, private celebrations, and guided
              nature walks — giving guests an immersive experience of Zimbabwean farmland.
            </p>
            <a
              href="tel:+263774102310"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#4A5E2A",
                color: "#FAF6F0",
                borderRadius: "0.375rem",
                padding: "0.875rem 2rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              +263 774 102 310
            </a>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "#EDF2E4", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#4A5E2A",
                letterSpacing: "0.2em",
                fontSize: "0.72rem",
                textTransform: "uppercase" as const,
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              What We Stand For
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
              }}
            >
              Our Values
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#F7FAF2",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(74,94,42,0.08)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(74,94,42,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(74,94,42,0.08)";
                }}
              >
                <div style={{ height: "200px", backgroundColor: "#D6E8C8", overflow: "hidden" }}>
                  <img
                    src={v.img}
                    alt={v.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2C1810",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "#5A6B40",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width farm landscape ── */}
      <section style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1754810940905-19a8d26f870e?w=1800&h=700&fit=crop&auto=format"
          alt="Rows of cabbage plants on a green hillside at sunrise"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,12,6,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              textAlign: "center",
              maxWidth: "700px",
              padding: "0 2rem",
              lineHeight: 1.3,
            }}
          >
            "Every seed planted is a promise — to the land, the community, and the families we feed."
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ background: "#FAF6F0", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
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
              30+ Years of Farming
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
              }}
            >
              Our Journey
            </h2>
          </div>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            {/* vertical line */}
            <div
              style={{
                position: "absolute",
                left: "0.45rem",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(to bottom, #4A5E2A, rgba(74,94,42,0.1))",
              }}
            />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  position: "relative",
                  marginBottom: i < milestones.length - 1 ? "2.5rem" : 0,
                }}
              >
                {/* dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-1.6rem",
                    top: "0.3rem",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4A5E2A",
                    border: "2px solid #EDF2E4",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "#4A5E2A",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {m.year}
                </p>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "#5A4A3A",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo grid ── */}
      <section style={{ background: "#EDF2E4", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#4A5E2A", letterSpacing: "0.2em", fontSize: "0.72rem", textTransform: "uppercase" as const, fontWeight: 700, marginBottom: "0.6rem" }}>
              Life on the Farm
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 600 }}>
              Scenes from Glent Worth
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "260px 260px",
              gap: "1rem",
            }}
          >
            {/* Large top-left */}
            <div style={{ gridColumn: "span 2", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#D6E8C8" }}>
              <img
                src="https://images.unsplash.com/photo-1774345798599-3d59d17e4508?w=900&h=520&fit=crop&auto=format"
                alt="Sunrise over misty agricultural fields"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Top-right */}
            <div style={{ borderRadius: "1rem", overflow: "hidden", backgroundColor: "#C4B49A" }}>
              <img
                src="https://images.unsplash.com/photo-1780667162311-3cdba0716533?w=500&h=520&fit=crop&auto=format"
                alt="Fresh green peas from the farm"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Bottom-left */}
            <div style={{ borderRadius: "1rem", overflow: "hidden", backgroundColor: "#E8DCC8" }}>
              <img
                src="https://images.unsplash.com/photo-1524593166156-312f362cada0?w=500&h=520&fit=crop&auto=format"
                alt="Ripe cherry tomatoes fresh from the garden"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Large bottom-right */}
            <div style={{ gridColumn: "span 2", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#D6E8C8" }}>
              <img
                src="https://images.unsplash.com/photo-1642085732669-2b869acec5a1?w=900&h=520&fit=crop&auto=format"
                alt="Scenic Zimbabwe countryside with green fields"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#2C1810", padding: "4.5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Come Visit the Farm
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#C4B49A",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            We welcome farm visits, group tours, and venue enquiries. Located in Norton, Zimbabwe.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link
              to="/venue"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#4A5E2A",
                color: "#FAF6F0",
                borderRadius: "0.375rem",
                padding: "0.875rem 2rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              View Venue
            </Link>
            <Link
              to="/products"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#FAF6F0",
                border: "1.5px solid rgba(250,246,240,0.4)",
                borderRadius: "0.375rem",
                padding: "0.875rem 2rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
