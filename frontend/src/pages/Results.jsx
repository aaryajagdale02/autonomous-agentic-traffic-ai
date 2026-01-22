import { useLocation, Link } from "react-router-dom";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Results() {
  const location = useLocation();
  console.log("RESULTS PAGE STATE:", location.state);

  // Safety check (handles refresh or direct URL access)
  if (!location.state || !location.state.output) {
    const ACCENT = "#22c55e";
    const BG_TOP = "#070A1A";
    const BG_BOTTOM = "#0B2A6F";

    const pageStyle = {
      margin: "-2rem",
      minHeight: "calc(100vh - 60px)",
      color: "#ffffff",
      background: `radial-gradient(1200px 600px at 10% 10%, rgba(34, 197, 94, 0.12), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 85% 25%, rgba(59, 130, 246, 0.15), rgba(0,0,0,0) 60%), linear-gradient(135deg, ${BG_TOP} 0%, ${BG_BOTTOM} 55%, #06102A 100%)`,
      padding: "2rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const cardStyle = {
      maxWidth: "520px",
      width: "100%",
      margin: "0 2rem",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.18)",
      backgroundColor: "rgba(15, 23, 42, 0.96)",
      boxShadow: "0 20px 55px rgba(0,0,0,0.5)",
      padding: "1.9rem 2rem 1.8rem",
    };

    const titleStyle = {
      fontSize: "1.4rem",
      fontWeight: 750,
      marginBottom: "0.75rem",
    };

    const textStyle = {
      fontSize: "0.95rem",
      color: "rgba(226,232,240,0.85)",
      marginBottom: "1.6rem",
    };

    const linkStyle = {
      display: "inline-block",
      padding: "0.8rem 1.4rem",
      borderRadius: "999px",
      background:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.96) 0%, rgba(16, 185, 129, 0.94) 60%, rgba(34, 197, 94, 0.92) 100%)",
      color: "#06102A",
      fontWeight: 750,
      textDecoration: "none",
      border: "1px solid rgba(34, 197, 94, 0.4)",
    };

    const badgeStyle = {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.2rem 0.6rem",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.5)",
      color: "rgba(226,232,240,0.9)",
      fontSize: "0.75rem",
      marginBottom: "0.85rem",
    };

    const dotStyle = {
      width: "7px",
      height: "7px",
      borderRadius: "999px",
      backgroundColor: ACCENT,
      boxShadow: "0 0 0 3px rgba(34,197,94,0.18)",
    };

    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <div style={badgeStyle}>
            <span style={dotStyle} />
            <span>Results dashboard</span>
          </div>
          <h2 style={titleStyle}>No results available</h2>
          <p style={textStyle}>
            To view optimization analytics, first configure a simulation and run the optimization from the control panel.
          </p>
          <Link to="/input" style={linkStyle}>
            Go to Simulation Control Panel
          </Link>
        </div>
      </div>
    );
  }

  const { input, output } = location.state;
  const { optimized_timings, metrics } = output;

  const ACCENT = "#22c55e";
  const BG_TOP = "#070A1A";
  const BG_BOTTOM = "#0B2A6F";

  // Page background
  const pageStyle = {
    margin: "-2rem",
    minHeight: "calc(100vh - 60px)",
    color: "#ffffff",
    background: `radial-gradient(1200px 600px at 10% 10%, rgba(34, 197, 94, 0.12), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 85% 25%, rgba(59, 130, 246, 0.15), rgba(0,0,0,0) 60%), linear-gradient(135deg, ${BG_TOP} 0%, ${BG_BOTTOM} 55%, #06102A 100%)`,
    padding: "2rem 0 2.4rem",
  };

  // Main container
  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 2rem",
  };

  // Header
  const headerStyle = {
    marginBottom: "1.75rem",
  };

  const titleStyle = {
    fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
    fontWeight: 800,
    marginBottom: "0.3rem",
    letterSpacing: "-0.02em",
  };

  const subtitleStyle = {
    fontSize: "0.95rem",
    color: "rgba(226,232,240,0.8)",
  };

  const subMetaRowStyle = {
    marginTop: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.6rem",
    fontSize: "0.8rem",
    color: "rgba(226,232,240,0.75)",
  };

  const chipStyle = {
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.6)",
    padding: "0.2rem 0.7rem",
    backgroundColor: "rgba(15,23,42,0.65)",
  };

  // Metrics row
  const metricsRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginBottom: "1.9rem",
  };

  const metricCardStyle = {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.18)",
    backgroundColor: "rgba(15,23,42,0.96)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.45)",
    padding: "1rem 1.2rem",
  };

  const metricLabelStyle = {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    color: "rgba(148,163,184,0.9)",
    marginBottom: "0.5rem",
  };

  const metricValueStyle = {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#f9fafb",
    marginBottom: "0.2rem",
  };

  const metricHintStyle = {
    fontSize: "0.78rem",
    color: "rgba(148,163,184,0.9)",
  };

  const metricAccentStyle = {
    color: ACCENT,
  };

  // Table card (enlarged)
  const tableCardStyle = {
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.18)",
    backgroundColor: "rgba(249,250,251,0.99)",
    boxShadow: "0 26px 70px rgba(0,0,0,0.55)",
    padding: "1.8rem 2.1rem 1.8rem",
    marginBottom: "1.4rem",
  };

  const tableHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "1rem",
  };

  const tableTitleStyle = {
    fontSize: "1.05rem",
    fontWeight: 750,
    color: "#111827",
  };

  const tableSubtitleStyle = {
    fontSize: "0.8rem",
    color: "#6b7280",
  };

  const tableWrapperStyle = {
    width: "100%",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "1rem",
  };

  const thStyle = {
    textAlign: "left",
    padding: "0.9rem 1rem",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#4b5563",
    borderBottom: "1px solid #e5e7eb",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "0.9rem 1rem",
    borderBottom: "1px solid #e5e7eb",
    color: "#111827",
  };

  const rowAltStyle = {
    backgroundColor: "#f9fafb",
  };

  const greenTimeBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    padding: "0.25rem 0.7rem",
    borderRadius: "999px",
    backgroundColor: "rgba(34,197,94,0.1)",
    color: "#166534",
    fontWeight: 700,
    fontSize: "0.8rem",
  };

  const greenDotStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    backgroundColor: ACCENT,
  };

  // Chart data
  const totalVehicleDensity =
    Array.isArray(input?.signals)
      ? input.signals.reduce(
          (sum, s) => sum + (typeof s.vehicle_density === "number" ? s.vehicle_density : 0),
          0
        )
      : 0;

  const totalPedestrianDensity =
    Array.isArray(input?.signals)
      ? input.signals.reduce(
          (sum, s) => sum + (typeof s.pedestrian_density === "number" ? s.pedestrian_density : 0),
          0
        )
      : 0;

  const pieData = [
    { name: "Vehicle", value: totalVehicleDensity },
    { name: "Pedestrian", value: totalPedestrianDensity },
  ];

  const pieColors = ["#22c55e", "#3b82f6"];

  const barData = optimized_timings.map((signal) => ({
    id: signal.id,
    green_time: signal.green_time,
  }));

  // Charts layout
  const chartsRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
    marginBottom: "1.9rem",
  };

  const chartCardStyle = {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.18)",
    backgroundColor: "rgba(249,250,251,0.99)",
    boxShadow: "0 22px 60px rgba(0,0,0,0.5)",
    padding: "1.3rem 1.4rem 1.1rem",
    minHeight: "260px",
  };

  const chartTitleStyle = {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#111827",
    marginBottom: "0.6rem",
  };

  const chartSubtitleStyle = {
    fontSize: "0.8rem",
    color: "#6b7280",
    marginBottom: "0.9rem",
  };

  const tooltipStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "0.5rem 0.6rem",
    color: "#111827",
    fontSize: "0.8rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    fontWeight: 600,
  };
  

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Optimization Results</h1>
          <p style={subtitleStyle}>
            Agentic AI has recomputed signal timings based on observed densities and time-of-day conditions.
          </p>
          <div style={subMetaRowStyle}>
            <span style={chipStyle}>Scenario: {input?.time_of_day}</span>
            <span style={chipStyle}>
              Signals optimized: {Array.isArray(input?.signals) ? input.signals.length : "-"}
            </span>
          </div>
        </header>

        {/* Top metrics */}
        <section style={metricsRowStyle}>
          <div style={metricCardStyle}>
            <div style={metricLabelStyle}>Total Time Saved</div>
            <div style={{ ...metricValueStyle, ...metricAccentStyle }}>
              {metrics.total_time_saved}
              <span style={{ fontSize: "0.8rem", marginLeft: "0.25rem" }}>s</span>
            </div>
            <div style={metricHintStyle}>Aggregate reduction in waiting and travel time.</div>
          </div>

          <div style={metricCardStyle}>
            <div style={metricLabelStyle}>Estimated Fuel Saved</div>
            <div style={{ ...metricValueStyle, ...metricAccentStyle }}>{metrics.fuel_saved}</div>
            <div style={metricHintStyle}>Less idling and smoother flow across the corridor.</div>
          </div>

          <div style={metricCardStyle}>
            <div style={metricLabelStyle}>Estimated CO₂ Reduction</div>
            <div style={{ ...metricValueStyle, ...metricAccentStyle }}>{metrics.co2_reduced}</div>
            <div style={metricHintStyle}>Emission reduction driven by optimized green splits.</div>
          </div>
        </section>

        {/* Charts */}
        <section style={chartsRowStyle}>
          {/* Traffic composition */}
          <div style={chartCardStyle}>
            <h2 style={chartTitleStyle}>Traffic Composition</h2>
            <p style={chartSubtitleStyle}>Aggregate vehicle vs pedestrian demand across all signals.</p>
            <div style={{ width: "100%", height: "190px" }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    innerRadius="45%"
                    paddingAngle={2}
                    isAnimationActive={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={pieColors[index % pieColors.length]}
                        stroke="#0f172a"
                        strokeWidth={1}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    isAnimationActive={false}
                    contentStyle={tooltipStyle}
                    cursor={{ fill: "rgba(148,163,184,0.15)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Green time distribution */}
          <div style={chartCardStyle}>
            <h2 style={chartTitleStyle}>Optimized Green Time Distribution</h2>
            <p style={chartSubtitleStyle}>Recommended green phase length per signal (seconds).</p>
            <div style={{ width: "100%", height: "190px" }}>
              <ResponsiveContainer>
                <BarChart data={barData} margin={{ top: 8, right: 4, left: 0, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="id"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    axisLine={{ stroke: "#d1d5db" }}
                    tickLine={{ stroke: "#d1d5db" }}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    axisLine={{ stroke: "#d1d5db" }}
                    tickLine={{ stroke: "#d1d5db" }}
                  />
                  <Tooltip
                    isAnimationActive={false}
                    contentStyle={tooltipStyle}
                    cursor={{ fill: "rgba(148,163,184,0.15)" }}
                  />
                  <Bar
                    dataKey="green_time"
                    fill={ACCENT}
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Signal timings table (primary focus) */}
        <section style={tableCardStyle}>
          <div style={tableHeaderStyle}>
            <div>
              <h2 style={tableTitleStyle}>Optimized Signal Timings</h2>
              <p style={tableSubtitleStyle}>Per-signal densities and final optimized green times.</p>
            </div>
          </div>
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Signal ID</th>
                  <th style={thStyle}>Vehicle Density</th>
                  <th style={thStyle}>Pedestrian Density</th>
                  <th style={thStyle}>Optimized Green Time (sec)</th>
                </tr>
              </thead>
              <tbody>
                {optimized_timings.map((signal, index) => (
                  <tr key={signal.id} style={index % 2 === 1 ? rowAltStyle : undefined}>
                    <td style={tdStyle}>{signal.id}</td>
                    <td style={tdStyle}>{signal.vehicle_density}</td>
                    <td style={tdStyle}>{signal.pedestrian_density}</td>
                    <td style={tdStyle}>
                      <span style={greenTimeBadgeStyle}>
                        <span style={greenDotStyle} />
                        {signal.green_time} s
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Results;
