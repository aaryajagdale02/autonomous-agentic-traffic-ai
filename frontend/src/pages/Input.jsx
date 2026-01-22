import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();

  // State management for all form inputs
  const [numSignals, setNumSignals] = useState(1);
  const [vehicleDensities, setVehicleDensities] = useState([0]);
  const [pedestrianDensities, setPedestrianDensities] = useState([0]);
  const [timeOfDay, setTimeOfDay] = useState("Morning");

  // Handle change in number of signals - dynamically update density arrays
  const handleNumSignalsChange = (e) => {
    const newNum = parseInt(e.target.value, 10);
    setNumSignals(newNum);

    // Update arrays to match new number of signals
    const newVehicleDensities = Array(newNum)
      .fill(0)
      .map((_, index) => vehicleDensities[index] || 0);
    const newPedestrianDensities = Array(newNum)
      .fill(0)
      .map((_, index) => pedestrianDensities[index] || 0);

    setVehicleDensities(newVehicleDensities);
    setPedestrianDensities(newPedestrianDensities);
  };

  // Handle vehicle density change for a specific signal
  const handleVehicleDensityChange = (index, value) => {
    const newDensities = [...vehicleDensities];
    newDensities[index] = parseInt(value, 10) || 0;
    setVehicleDensities(newDensities);
  };

  // Handle pedestrian density change for a specific signal
  const handlePedestrianDensityChange = (index, value) => {
    const newDensities = [...pedestrianDensities];
    newDensities[index] = parseInt(value, 10) || 0;
    setPedestrianDensities(newDensities);
  };

  // Handle form submission - structure data and navigate to results
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      time_of_day: timeOfDay,
      signals: vehicleDensities.map((v, index) => ({
        id: index + 1,
        vehicle_density: v,
        pedestrian_density: pedestrianDensities[index],
      })),
    };
  
    try {
      const response = await fetch("http://localhost:8000/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
  
      console.log("Backend response:", result);
  
      // 🔥 ADD THIS PART
      navigate("/results", {
        state: {
          input: payload,
          output: result,
        },
      });
  
    } catch (error) {
      console.error("Backend error:", error);
      alert("Backend connection failed");
    }
  };
  
  // Design constants to align with Home page
  const ACCENT = "#22c55e";
  const BG_TOP = "#070A1A";
  const BG_BOTTOM = "#0B2A6F";

  // Dark background wrapper
  const pageStyle = {
    margin: "-2rem",
    minHeight: "calc(100vh - 60px)",
    color: "#ffffff",
    background: `radial-gradient(1200px 600px at 10% 10%, rgba(34, 197, 94, 0.12), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 85% 25%, rgba(59, 130, 246, 0.15), rgba(0,0,0,0) 60%), linear-gradient(135deg, ${BG_TOP} 0%, ${BG_BOTTOM} 55%, #06102A 100%)`,
    padding: "2rem 0",
  };

  // Main container
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 2rem",
  };

  // Page header
  const titleStyle = {
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
    fontWeight: 800,
    marginBottom: "0.35rem",
    color: "#ffffff",
    letterSpacing: "-0.02em",
  };

  const subtitleStyle = {
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.74)",
    marginBottom: "2.25rem",
  };

  // Form layout
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  // Generic card (light on dark)
  const cardStyle = {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(249, 250, 251, 0.97)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.35)",
    padding: "1.6rem 1.8rem",
  };

  const cardTitleStyle = {
    fontSize: "1.15rem",
    fontWeight: 750,
    color: "#111827",
    marginBottom: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    letterSpacing: "0.01em",
  };

  const cardBadgeStyle = {
    padding: "0.1rem 0.6rem",
    borderRadius: "999px",
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    color: "#065f46",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  // Configuration grid
  const configGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.25rem",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.45rem",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#111827",
    letterSpacing: "0.01em",
  };

  const helperTextStyle = {
    fontSize: "0.78rem",
    color: "#6b7280",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem 0.95rem",
    fontSize: "0.95rem",
    border: "1px solid rgba(17,24,39,0.12)",
    borderRadius: "10px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontWeight: 500,
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23111827' d='M6 8.25L2 3.75h8z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.9rem center",
    paddingRight: "2.1rem",
  };

  // Signal density section
  const signalsSectionStyle = {
    ...cardStyle,
  };

  const signalsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.1rem",
    marginTop: "0.9rem",
  };

  // Individual signal mini-card
  const signalCardStyle = {
    borderRadius: "12px",
    border: "1px solid rgba(17,24,39,0.08)",
    backgroundColor: "#f9fafb",
    padding: "1.15rem 1.2rem",
    boxShadow: "0 6px 18px rgba(15,23,42,0.12)",
  };

  const signalHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.85rem",
  };

  const signalTitleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.55rem",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#111827",
  };

  const signalIconStyle = {
    width: "26px",
    height: "26px",
    borderRadius: "8px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    color: "#15803d",
    fontSize: "0.95rem",
  };

  const signalMetaStyle = {
    fontSize: "0.75rem",
    color: "#6b7280",
  };

  const signalInputsGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.7rem",
  };

  // Submit button row
  const buttonRowStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.75rem",
  };

  const primaryButtonStyle = {
    appearance: "none",
    border: "1px solid rgba(34, 197, 94, 0.35)",
    background:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.96) 0%, rgba(16, 185, 129, 0.94) 60%, rgba(34, 197, 94, 0.92) 100%)",
    color: "#06102A",
    fontWeight: 800,
    padding: "0.95rem 2.7rem",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
    fontSize: "1.02rem",
    letterSpacing: "0.02em",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Traffic Simulation Control Panel</h1>
        <p style={subtitleStyle}>
          Configure your simulation parameters and density inputs for each signal before running the optimization.
        </p>

        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Simulation Configuration Card */}
          <div style={cardStyle}>
            <div style={cardTitleStyle}>
              <span style={{ fontSize: "1.2rem" }}>⚙️</span>
              <span>Simulation Configuration</span>
              <span style={cardBadgeStyle}>Setup</span>
            </div>
            <div style={configGridStyle}>
              <div style={inputGroupStyle}>
                <label htmlFor="numSignals" style={labelStyle}>
                  Number of Traffic Signals
                </label>
                <input
                  type="number"
                  id="numSignals"
                  min="1"
                  max="6"
                  value={numSignals}
                  onChange={handleNumSignalsChange}
                  style={inputStyle}
                  required
                />
                <div style={helperTextStyle}>Define how many intersections are in this simulation run.</div>
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="timeOfDay" style={labelStyle}>
                  Time of Day
                </label>
                <select
                  id="timeOfDay"
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(e.target.value)}
                  style={selectStyle}
                  required
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                </select>
                <div style={helperTextStyle}>Aligns the optimization with expected demand patterns.</div>
              </div>
            </div>
          </div>

          {/* Signal Density Controls Card */}
          <div style={signalsSectionStyle}>
            <div style={cardTitleStyle}>
              <span style={{ fontSize: "1.2rem" }}>🚦</span>
              <span>Signal Density Controls</span>
              <span style={cardBadgeStyle}>Per signal</span>
            </div>
            <div style={signalsGridStyle}>
              {Array(numSignals)
                .fill(0)
                .map((_, index) => (
                  <div key={index} style={signalCardStyle}>
                    <div style={signalHeaderStyle}>
                      <div style={signalTitleStyle}>
                        <div style={signalIconStyle}>S{index + 1}</div>
                        <span>Signal {index + 1}</span>
                      </div>
                      <span style={signalMetaStyle}>Node {index + 1}</span>
                    </div>
                    <div style={signalInputsGridStyle}>
                      <div style={inputGroupStyle}>
                        <label htmlFor={`vehicle-${index}`} style={labelStyle}>
                          Vehicle Density (0–10)
                        </label>
                        <input
                          type="number"
                          id={`vehicle-${index}`}
                          min="0"
                          max="10"
                          value={vehicleDensities[index] || 0}
                          onChange={(e) => handleVehicleDensityChange(index, e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>
                      <div style={inputGroupStyle}>
                        <label htmlFor={`pedestrian-${index}`} style={labelStyle}>
                          Pedestrian Density (0–10)
                        </label>
                        <input
                          type="number"
                          id={`pedestrian-${index}`}
                          min="0"
                          max="10"
                          value={pedestrianDensities[index] || 0}
                          onChange={(e) => handlePedestrianDensityChange(index, e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Primary action */}
          <div style={buttonRowStyle}>
            <button type="submit" style={primaryButtonStyle}>
              Run Optimization
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
