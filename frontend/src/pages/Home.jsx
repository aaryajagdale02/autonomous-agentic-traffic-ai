import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const ACCENT = "#22c55e";
  const BG_TOP = "#070A1A";
  const BG_BOTTOM = "#0B2A6F";

  const pageStyle = {
    margin: "-2rem",
    minHeight: "calc(100vh - 60px)",
    color: "#ffffff",
    background: `radial-gradient(1200px 600px at 10% 10%, rgba(34, 197, 94, 0.18), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 85% 25%, rgba(59, 130, 246, 0.22), rgba(0,0,0,0) 60%), linear-gradient(135deg, ${BG_TOP} 0%, ${BG_BOTTOM} 55%, #06102A 100%)`,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4.25rem 2rem 3rem",
  };

  const heroGridStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2.5rem",
    flexWrap: "wrap",
  };

  const leftStyle = {
    flex: "1 1 520px",
    minWidth: "280px",
  };

  const rightStyle = {
    flex: "1 1 420px",
    minWidth: "280px",
    display: "flex",
    justifyContent: "flex-end",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.45rem 0.75rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    fontSize: "0.9rem",
    letterSpacing: "0.02em",
  };

  const titleStyle = {
    margin: "1rem 0 0.75rem",
    fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
    lineHeight: 1.08,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  };

  const accentUnderlineStyle = {
    boxShadow: `inset 0 -0.22em 0 rgba(34, 197, 94, 0.24)`,
  };

  const subtitleStyle = {
    margin: 0,
    maxWidth: "58ch",
    fontSize: "1.05rem",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)",
  };

  const ctaRowStyle = {
    marginTop: "1.65rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    appearance: "none",
    border: "1px solid rgba(34, 197, 94, 0.35)",
    background: `linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(16, 185, 129, 0.92) 60%, rgba(34, 197, 94, 0.90) 100%)`,
    color: "#06102A",
    fontWeight: 800,
    padding: "0.95rem 1.15rem",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
  };

  const secondaryMetaStyle = {
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.7)",
  };

  const heroCardStyle = {
    width: "min(520px, 100%)",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(7, 10, 26, 0.55)",
    boxShadow: "0 28px 70px rgba(0,0,0,0.45)",
    padding: "1.25rem 1.25rem 1.1rem",
    overflow: "hidden",
  };

  const dividerStyle = {
    height: "1px",
    background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.18), rgba(255,255,255,0))",
    margin: "2.75rem 0 2rem",
  };

  const sectionTitleStyle = {
    margin: 0,
    fontSize: "1.15rem",
    fontWeight: 750,
    letterSpacing: "0.01em",
  };

  const sectionSubtitleStyle = {
    margin: "0.55rem 0 0",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.6,
    maxWidth: "70ch",
  };

  const featuresGridStyle = {
    marginTop: "1.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.15rem",
  };

  const featureCardStyle = {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.35)",
    padding: "1.15rem 1.15rem 1.1rem",
  };

  const featureTopRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.6rem",
  };

  const iconShellStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "grid",
    placeItems: "center",
    background: "rgba(34, 197, 94, 0.14)",
    border: "1px solid rgba(34, 197, 94, 0.22)",
  };

  const featureTitleStyle = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 750,
  };

  const featureBodyStyle = {
    margin: 0,
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.6,
    fontSize: "0.95rem",
  };

  const kpiRowStyle = {
    marginTop: "0.85rem",
    display: "flex",
    gap: "0.6rem",
    flexWrap: "wrap",
  };

  const kpiStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    borderRadius: "999px",
    padding: "0.35rem 0.6rem",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.86)",
    fontSize: "0.85rem",
  };

  const dotStyle = (color) => ({
    width: "8px",
    height: "8px",
    borderRadius: "999px",
    background: color,
    boxShadow: `0 0 0 3px rgba(255,255,255,0.06)`,
  });

  const Illustration = () => (
    <svg
      viewBox="0 0 900 620"
      width="100%"
      height="auto"
      role="img"
      aria-label="Smart city traffic AI illustration"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#0ea5e9" stopOpacity="0.35" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B122E" stopOpacity="1" />
          <stop offset="1" stopColor="#050816" stopOpacity="1" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Backplate */}
      <rect x="0" y="0" width="900" height="620" rx="24" fill="url(#g1)" opacity="0.26" />

      {/* Skyline */}
      <g opacity="0.92">
        <rect x="70" y="110" width="85" height="190" rx="10" fill="rgba(255,255,255,0.12)" />
        <rect x="175" y="70" width="105" height="230" rx="10" fill="rgba(255,255,255,0.10)" />
        <rect x="305" y="125" width="115" height="175" rx="10" fill="rgba(255,255,255,0.13)" />
        <rect x="445" y="85" width="140" height="215" rx="10" fill="rgba(255,255,255,0.09)" />
        <rect x="615" y="115" width="95" height="185" rx="10" fill="rgba(255,255,255,0.12)" />
        <rect x="730" y="55" width="105" height="245" rx="10" fill="rgba(255,255,255,0.10)" />
      </g>

      {/* Windows */}
      <g opacity="0.75">
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 92 + (i % 7) * 26;
          const y = 138 + Math.floor(i / 7) * 32;
          return <rect key={i} x={x} y={y} width="10" height="12" rx="2" fill="rgba(34,197,94,0.55)" />;
        })}
      </g>

      {/* Road */}
      <path
        d="M 0 360 C 220 320, 420 320, 900 380 L 900 620 L 0 620 Z"
        fill="url(#road)"
        opacity="0.96"
      />

      {/* Lane lines */}
      <g opacity="0.55">
        {Array.from({ length: 10 }).map((_, i) => (
          <rect
            key={i}
            x={90 + i * 78}
            y={470 + (i % 2) * 6}
            width="44"
            height="6"
            rx="3"
            fill="rgba(255,255,255,0.55)"
          />
        ))}
      </g>

      {/* Intersections + nodes */}
      <g filter="url(#softGlow)">
        <circle cx="270" cy="405" r="10" fill={ACCENT} opacity="0.95" />
        <circle cx="455" cy="392" r="10" fill="#60a5fa" opacity="0.95" />
        <circle cx="640" cy="418" r="10" fill={ACCENT} opacity="0.95" />

        <path
          d="M 270 405 C 350 375, 395 375, 455 392"
          stroke="rgba(96,165,250,0.65)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 455 392 C 540 400, 585 402, 640 418"
          stroke="rgba(34,197,94,0.55)"
          strokeWidth="3"
          fill="none"
        />
      </g>

      {/* Traffic light */}
      <g transform="translate(135, 330)">
        <rect x="0" y="0" width="52" height="120" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.18)" />
        <circle cx="26" cy="28" r="10" fill="rgba(239,68,68,0.9)" />
        <circle cx="26" cy="60" r="10" fill="rgba(250,204,21,0.9)" />
        <circle cx="26" cy="92" r="10" fill="rgba(34,197,94,0.92)" />
      </g>

      {/* Simple cars */}
      <g opacity="0.95">
        <rect x="355" y="445" width="74" height="26" rx="10" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.16)" />
        <rect x="372" y="436" width="40" height="14" rx="7" fill="rgba(96,165,250,0.40)" />

        <rect x="545" y="462" width="78" height="28" rx="10" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.16)" />
        <rect x="563" y="452" width="42" height="15" rx="7" fill="rgba(34,197,94,0.28)" />
      </g>
    </svg>
  );

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={heroGridStyle}>
          <div style={leftStyle}>
            <div style={badgeStyle}>
              <span style={dotStyle(ACCENT)} />
              <span>
                Multi-agent optimization • <span style={{ color: ACCENT, fontWeight: 800 }}>Smart City AI</span>
              </span>
            </div>

            <h1 style={titleStyle}>
              <span style={accentUnderlineStyle}>
                Autonomous Agentic AI–Based Traffic Signal Optimization System
              </span>
            </h1>

            <p style={subtitleStyle}>
              A web-based simulation platform utilising Agentic AI to dynamically recommend optical green-light durations for traffic signals along an entire route.
            </p>

            <div style={ctaRowStyle}>
              <button type="button" style={primaryButtonStyle} onClick={() => navigate("/input")}>
                Run Traffic Simulation
              </button>
            </div>

            <div style={kpiRowStyle}>
              <span style={kpiStyle}>
                <span style={dotStyle("rgba(96,165,250,0.95)")} />
                Live density inputs
              </span>
              <span style={kpiStyle}>
                <span style={dotStyle("rgba(34,197,94,0.95)")} />
                Adaptive green splits
              </span>
              <span style={kpiStyle}>
                <span style={dotStyle("rgba(250,204,21,0.95)")} />
                Impact metrics
              </span>
            </div>
          </div>

          <div style={rightStyle}>
            <div style={heroCardStyle}>
              <Illustration />
            </div>
          </div>
        </div>

        <div style={dividerStyle} />

        <div>
        

          <div style={featuresGridStyle}>
            <div style={featureCardStyle}>
              <div style={featureTopRowStyle}>
                <div style={iconShellStyle}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 900, color: ACCENT }}>⏱</span>
                </div>
                <h3 style={featureTitleStyle}>Dynamic Signal Timing</h3>
              </div>
              <p style={featureBodyStyle}>
                Adjusts green time allocations from observed vehicle/pedestrian densities to reduce stop-and-go waves and
                keep traffic moving.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureTopRowStyle}>
                <div style={iconShellStyle}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 900, color: ACCENT }}>🧠</span>
                </div>
                <h3 style={featureTitleStyle}>Agentic AI Decision System</h3>
              </div>
              <p style={featureBodyStyle}>
                Multi-agent coordination balances local intersection goals with corridor-level flow—making decisions that
                remain stable under changing demand.
              </p>
            </div>

            <div style={featureCardStyle}>
              <div style={featureTopRowStyle}>
                <div style={iconShellStyle}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 900, color: ACCENT }}>🌿</span>
                </div>
                <h3 style={featureTitleStyle}>Sustainability & Reduced Emissions</h3>
              </div>
              <p style={featureBodyStyle}>
                Less idling and smoother queues translate to lower fuel use and measurable CO₂ reduction—tracked directly
                in the results view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

