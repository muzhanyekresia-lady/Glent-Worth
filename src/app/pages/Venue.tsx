import { Link } from "react-router";

const venueFeatures = [
  "Scenic outdoor ceremony space",
  "Private dining area for up to 150 guests",
  "On-site catering with farm-fresh produce",
  "Bridal preparation suite",
  "Ample parking & easy access from Norton",
  "Customisable décor packages",
];

const partyFeatures = [
  "Birthday celebrations & family gatherings",
  "Corporate team-building events",
  "Garden braai & sundowner parties",
  "Bespoke catering from our farm kitchen",
  "Sound system & event coordination",
  "Children's farm activity packages",
];

const walkFeatures = [
  "Guided walks through working farm fields",
  "Bird-watching along the natural corridor",
  "Seasonal harvest experiences",
  "Farm animal encounters & feeding",
  "Educational tours for school groups",
  "Sunrise & sunset guided walks",
];

function FeatureList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "0.7rem" }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: accent,
              flexShrink: 0,
              marginTop: "0.45rem",
            }}
          />
          <span style={{ fontFamily: "'Lato', sans-serif", color: "#7A6350", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 300 }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Venue() {
  return (
    <div>
      {/* ── Page hero ── */}
      <section
        style={{
          position: "relative",
          height: "520px",
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
              "url('https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?w=1800&h=900&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,12,6,0.55)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem", maxWidth: "780px" }}>
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
            Norton, Zimbabwe
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              marginBottom: "1.25rem",
            }}
          >
            A Venue Like No Other
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#E0D5C5",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Host your wedding, celebrate with friends, or explore the countryside — all at Glent Worth Farm.
          </p>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section style={{ background: "#FAF6F0", padding: "4rem 2rem", borderBottom: "1px solid rgba(44,24,16,0.07)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#5A4A3A",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Nestled in the natural beauty of Norton, Zimbabwe, the Glent Worth Farm venue offers a unique
            farm-to-event experience. Our grounds provide a stunning backdrop for intimate weddings,
            lively celebrations, and peaceful nature walks — with farm-fresh food at the heart of every occasion.
          </p>
        </div>
      </section>

      {/* ── Weddings ── */}
      <section style={{ background: "#FAF6F0", padding: "5.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "3/4",
              backgroundColor: "#C4B49A",
              boxShadow: "0 12px 48px rgba(44,24,16,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?w=700&h=933&fit=crop&auto=format"
              alt="Outdoor wedding arch with flowers at Glent Worth Farm"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
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
              Intimate · Elegant · Unforgettable
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Weddings at the Farm
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
              Say your vows surrounded by the natural beauty of a working Zimbabwean farm. From intimate
              elopements to celebrations for 150+ guests, we create a bespoke setting for your most special day —
              with farm-fresh catering, stunning natural backdrops, and a warm, unhurried atmosphere.
            </p>
            <FeatureList items={venueFeatures} accent="#8B6845" />
            <div style={{ marginTop: "2rem" }}>
              <a
                href="tel:+263774102310"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  background: "#8B6845",
                  color: "#FAF6F0",
                  borderRadius: "0.375rem",
                  padding: "0.875rem 2rem",
                  letterSpacing: "0.09em",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Enquire About Weddings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parties ── */}
      <section style={{ background: "#EDF2E4", padding: "5.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
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
              Celebrations &amp; Gatherings
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Private{" "}
              <em style={{ fontStyle: "italic", color: "#4A5E2A" }}>Parties</em>
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#5A6B40",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}
            >
              Our farm grounds make the perfect escape for private celebrations. Whether it's a milestone
              birthday, family reunion, or a corporate sundowner — we handle the setup, catering and
              ambiance so you can simply enjoy the day.
            </p>
            <FeatureList items={partyFeatures} accent="#4A5E2A" />
            <div style={{ marginTop: "2rem" }}>
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
                  display: "inline-block",
                }}
              >
                Book a Party
              </a>
            </div>
          </div>
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              backgroundColor: "#D6E8C8",
              boxShadow: "0 12px 40px rgba(74,94,42,0.14)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1557296440-0dc5e8ba9bc8?w=800&h=600&fit=crop&auto=format"
              alt="Outdoor garden party tables set up beautifully"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Nature Walks ── */}
      <section style={{ background: "#FAF6F0", padding: "5.5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              backgroundColor: "#C4B49A",
              boxShadow: "0 12px 40px rgba(44,24,16,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1642085732669-2b869acec5a1?w=800&h=600&fit=crop&auto=format"
              alt="Scenic grassy field with mountain backdrop in Zimbabwe"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
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
              Experience Zimbabwe's Countryside
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Guided{" "}
              <em style={{ fontStyle: "italic", color: "#4A5E2A" }}>Nature Walks</em>
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
              Step away from the city and into the living landscape of Glent Worth Farm. Our guided walks
              take you through working fields, along birdlife-rich corridors, and past seasonal crops —
              connecting you with the natural rhythms of Zimbabwean farm life.
            </p>
            <FeatureList items={walkFeatures} accent="#4A5E2A" />
            <div style={{ marginTop: "2rem" }}>
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
                  display: "inline-block",
                }}
              >
                Book a Walk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo mosaic ── */}
      <section style={{ background: "#EDF2E4", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              Our Farm Grounds
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
              }}
            >
              A Place Worth Celebrating
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "280px 280px",
              gap: "1rem",
            }}
          >
            <div style={{ gridColumn: "span 2", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#C4B49A" }}>
              <img
                src="https://images.unsplash.com/photo-1578730169862-749bbdc763a8?w=900&h=560&fit=crop&auto=format"
                alt="Venue benches on a hill"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ borderRadius: "1rem", overflow: "hidden", backgroundColor: "#D6E8C8" }}>
              <img
                src="https://images.unsplash.com/photo-1777835663969-c710d37377d1?w=500&h=560&fit=crop&auto=format"
                alt="Elegant outdoor table setting"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ borderRadius: "1rem", overflow: "hidden", backgroundColor: "#E8DCC8" }}>
              <img
                src="https://images.unsplash.com/photo-1728042107033-76b13feac547?w=500&h=560&fit=crop&auto=format"
                alt="African sunset with giraffes silhouette"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ gridColumn: "span 2", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#C4B49A" }}>
              <img
                src="https://images.unsplash.com/photo-1655981649945-cbd213e524c4?w=900&h=560&fit=crop&auto=format"
                alt="African landscape with trees and mountains"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section style={{ background: "#2C1810", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#A8C070",
              letterSpacing: "0.2em",
              fontSize: "0.72rem",
              textTransform: "uppercase" as const,
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Norton, Zimbabwe
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Ready to Book Your Event?
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#C4B49A",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: "2.25rem",
            }}
          >
            We'd love to host your special occasion. Get in touch to check availability, discuss your
            requirements, and receive a personalised quote.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const, marginBottom: "2rem" }}>
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
            <a
              href="mailto:info@glentworthfarm.co.zw"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#FAF6F0",
                border: "1.5px solid rgba(250,246,240,0.45)",
                borderRadius: "0.375rem",
                padding: "0.875rem 2rem",
                letterSpacing: "0.09em",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              info@glentworthfarm.co.zw
            </a>
          </div>
          <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", alignItems: "center" }}>
            {[
              { label: "Facebook", href: "https://facebook.com" },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "TikTok", href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#9A8070",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8C070")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9A8070")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
