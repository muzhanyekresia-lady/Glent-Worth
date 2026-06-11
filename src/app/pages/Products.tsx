const meats = [
  {
    id: 1,
    name: "Premium Pork",
    desc: "Free-range pork raised on our open pastures. Whole cuts, ribs, mince & sausages available.",
    img: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=600&h=500&fit=crop&auto=format",
    tag: "Pasture Raised",
  },
  {
    id: 2,
    name: "Grass-Fed Beef",
    desc: "Slow-grown, naturally marbled beef. Available as whole sides, steaks & stewing cuts.",
    img: "https://images.unsplash.com/photo-1777898967209-2d124602a601?w=600&h=500&fit=crop&auto=format",
    tag: "Grass Fed",
  },
  {
    id: 3,
    name: "Heritage Goat",
    desc: "Tender, full-flavoured heritage goat. Perfect for braaing, stewing or a traditional feast.",
    img: "https://images.unsplash.com/photo-1623047437095-27418540c288?w=600&h=500&fit=crop&auto=format",
    tag: "Heritage Breed",
  },
  {
    id: 4,
    name: "Spring Lamb",
    desc: "Delicate, naturally reared spring lamb. Chops, leg roasts & whole animals for events.",
    img: "https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?w=600&h=500&fit=crop&auto=format",
    tag: "Spring Season",
  },
];

const vegetables = [
  {
    id: 1,
    name: "Green Peas",
    desc: "Plump, vibrant peas in the pod — picked fresh at peak sweetness.",
    img: "https://images.unsplash.com/photo-1780667162311-3cdba0716533?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Fresh Kale",
    desc: "Deeply nutritious kale, cut straight from our organic beds.",
    img: "https://images.unsplash.com/photo-1768672957286-e635cdad5ecd?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Field Cabbage",
    desc: "Firm, crisp heads grown in open fields — no pesticides.",
    img: "https://images.unsplash.com/photo-1591586007768-40725cc562a1?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Cherry Tomatoes",
    desc: "Bursting with sweetness, ripened under the Zimbabwean sun.",
    img: "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Cucumbers",
    desc: "Cool, crunchy cucumbers freshly harvested from our rows.",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&h=480&fit=crop&auto=format",
  },
];

function SectionLabel({ color, text }: { color: string; text: string }) {
  return (
    <p
      style={{
        fontFamily: "'Lato', sans-serif",
        color,
        letterSpacing: "0.2em",
        fontSize: "0.72rem",
        textTransform: "uppercase" as const,
        fontWeight: 700,
        marginBottom: "0.75rem",
      }}
    >
      {text}
    </p>
  );
}

function MeatCard({ meat }: { meat: (typeof meats)[0] }) {
  return (
    <div
      style={{
        background: "#FFF8F0",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(44,24,16,0.07)",
        transition: "transform 0.25s, box-shadow 0.25s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 32px rgba(44,24,16,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(44,24,16,0.07)";
      }}
    >
      <div style={{ position: "relative", height: "240px", backgroundColor: "#E8DCC8" }}>
        <img src={meat.img} alt={meat.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <span
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(250,246,240,0.92)",
            color: "#4A5E2A",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            padding: "0.3rem 0.75rem",
            borderRadius: "2rem",
          }}
        >
          {meat.tag}
        </span>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.4rem" }}>
          {meat.name}
        </h3>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A6350", fontSize: "0.87rem", lineHeight: 1.65, fontWeight: 300, marginBottom: "1.25rem" }}>
          {meat.desc}
        </p>
        <a
          href="tel:+263774102310"
          style={{
            fontFamily: "'Lato', sans-serif",
            background: "transparent",
            color: "#4A5E2A",
            border: "1.5px solid #4A5E2A",
            borderRadius: "0.375rem",
            padding: "0.5rem 1.25rem",
            letterSpacing: "0.08em",
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase" as const,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

function VegCard({ veg }: { veg: (typeof vegetables)[0] }) {
  return (
    <div
      style={{
        background: "#F7FAF2",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(74,94,42,0.08)",
        transition: "transform 0.25s, box-shadow 0.25s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(74,94,42,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(74,94,42,0.08)";
      }}
    >
      <div style={{ height: "200px", backgroundColor: "#D6E8C8" }}>
        <img src={veg.img} alt={veg.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: "1.25rem 1.5rem" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.35rem" }}>
          {veg.name}
        </h3>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "#5A6B40", fontSize: "0.84rem", lineHeight: 1.6, fontWeight: 300 }}>
          {veg.desc}
        </p>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <div>
      {/* ── Page hero ── */}
      <section
        style={{
          position: "relative",
          height: "380px",
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
              "url('https://images.unsplash.com/photo-1485637701894-09ad422f6de6?w=1600&h=700&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,12,6,0.62)" }} />
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
            Farm Fresh · Norton, Zimbabwe
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAF6F0",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            Our Products
          </h1>
        </div>
      </section>

      {/* ── Meats ── */}
      <section style={{ background: "#FAF6F0", padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", display: "flex", flexWrap: "wrap" as const, justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
            <div>
              <SectionLabel color="#8B6845" text="Ethically Raised" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
                Premium Meats
              </h2>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A6350", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "400px", fontWeight: 300 }}>
              All livestock are free-range and grass-fed on our Norton farm. Available by order — call to enquire.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.75rem" }}>
            {meats.map((m) => <MeatCard key={m.id} meat={m} />)}
          </div>
        </div>
      </section>

      {/* ── Vegetables ── */}
      <section style={{ background: "#EDF2E4", padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", display: "flex", flexWrap: "wrap" as const, justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
            <div>
              <SectionLabel color="#4A5E2A" text="Grown Organically" />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
                Fresh Vegetables
              </h2>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#5A6B40", fontSize: "0.92rem", lineHeight: 1.7, maxWidth: "400px", fontWeight: 300 }}>
              Pesticide-free, hand-picked produce from our rich Zimbabwean soil — delivered to your door.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {vegetables.map((v) => <VegCard key={v.id} veg={v} />)}
          </div>
        </div>
      </section>

      {/* ── Oyster Mushrooms ── */}
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
              aspectRatio: "4/5",
              backgroundColor: "#C4B49A",
              boxShadow: "0 12px 48px rgba(44,24,16,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1760108273033-0d789ef53d70?w=700&h=875&fit=crop&auto=format"
              alt="Fresh oyster mushrooms grown at Glent Worth Farm"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <SectionLabel color="#8B6845" text="Locally Cultivated · Hand-Picked" />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1810",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Oyster{" "}
              <em style={{ fontStyle: "italic", color: "#4A5E2A" }}>Mushrooms</em>
            </h2>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A6350", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
              Our oyster mushrooms are grown on-farm in naturally ventilated, humidity-controlled
              growing houses. Each cluster is hand-picked at the peak of freshness to deliver
              an exceptional flavour and silky texture.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#7A6350", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Available in 250g, 500g and 1kg packs — perfect for home cooking, restaurants and
              market traders. We supply throughout Norton and the wider Mashonaland West region.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.25rem" }}>
              {[
                { label: "Pearl Oyster", note: "Mild & tender" },
                { label: "Pink Oyster", note: "Fruity & aromatic" },
                { label: "Grey Oyster", note: "Earthy & meaty" },
                { label: "Golden Oyster", note: "Delicate & nutty" },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "#F5F2EC",
                    borderRadius: "0.75rem",
                    padding: "1rem 1.25rem",
                    border: "1px solid rgba(44,24,16,0.07)",
                  }}
                >
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                    {m.label}
                  </p>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: "#9A8070", fontSize: "0.78rem", fontWeight: 300 }}>
                    {m.note}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="tel:+263774102310"
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
                display: "inline-block",
              }}
            >
              Order Mushrooms
            </a>
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section style={{ background: "#2C1810", padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/9/fields.jpg?w=1600&h=700&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <SectionLabel color="#C8B090" text="Available Year Round" />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FAF6F0",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Equipment{" "}
              <em style={{ fontStyle: "italic", color: "#A8C070" }}>for Hire</em>
            </h2>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#C4B49A", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              Hire professional farm equipment by the day, week or season. Tractors, ploughs,
              cultivators, irrigation systems and harvesting attachments — all maintained to
              working standard and ready for your land.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.25rem" }}>
              {["Heavy Tractors", "Disc Ploughs", "Rotary Tillers", "Irrigation Rigs"].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(250,246,240,0.06)",
                    borderRadius: "0.75rem",
                    padding: "0.9rem 1.1rem",
                    border: "1px solid rgba(250,246,240,0.09)",
                  }}
                >
                  <p style={{ fontFamily: "'Lato', sans-serif", color: "#E0D5C5", fontSize: "0.88rem", fontWeight: 400 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="tel:+263774102310"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#FAF6F0",
                color: "#2C1810",
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
              Enquire: +263 774 102 310
            </a>
          </div>
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              backgroundColor: "#5A4A3A",
              boxShadow: "0 16px 60px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&h=600&fit=crop&auto=format"
              alt="Green tractor on a grass farm field"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section style={{ background: "#4A5E2A", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FAF6F0", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, marginBottom: "0.75rem" }}>
            Place an Order Today
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(250,246,240,0.75)", fontSize: "0.92rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.75rem" }}>
            Call or email us to arrange delivery or collection from the farm in Norton, Zimbabwe.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
            <a
              href="tel:+263774102310"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#FAF6F0",
                color: "#2C1810",
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
                border: "1.5px solid rgba(250,246,240,0.5)",
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
        </div>
      </section>
    </div>
  );
}
