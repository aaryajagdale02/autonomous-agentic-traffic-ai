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
  
  

  // Container styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  };

  const titleStyle = {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "2rem",
    color: "#1a1a2e",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };

  // Section styles
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  };

  const sectionTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#16213e",
    marginBottom: "0.5rem",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#495057",
    marginBottom: "0.5rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
  };

  // Signal group styles
  const signalGroupStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    border: "1px solid #dee2e6",
  };

  const signalHeaderStyle = {
    gridColumn: "1 / -1",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#16213e",
    marginBottom: "0.5rem",
  };

  const buttonStyle = {
    padding: "0.875rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#1a1a2e",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Traffic Simulation Input</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Number of Signals Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Simulation Configuration</h2>
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
        </section>

        {/* Time of Day Section */}
        <section style={sectionStyle}>
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
        </section>

        {/* Signal Density Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Traffic Density per Signal</h2>
          {Array(numSignals)
            .fill(0)
            .map((_, index) => (
              <div key={index} style={signalGroupStyle}>
                <div style={signalHeaderStyle}>Signal {index + 1}</div>
                <div>
                  <label
                    htmlFor={`vehicle-${index}`}
                    style={labelStyle}
                  >
                    Vehicle Density (0-10)
                  </label>
                  <input
                    type="number"
                    id={`vehicle-${index}`}
                    min="0"
                    max="10"
                    value={vehicleDensities[index] || 0}
                    onChange={(e) =>
                      handleVehicleDensityChange(index, e.target.value)
                    }
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`pedestrian-${index}`}
                    style={labelStyle}
                  >
                    Pedestrian Density (0-10)
                  </label>
                  <input
                    type="number"
                    id={`pedestrian-${index}`}
                    min="0"
                    max="10"
                    value={pedestrianDensities[index] || 0}
                    onChange={(e) =>
                      handlePedestrianDensityChange(index, e.target.value)
                    }
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            ))}
        </section>

        {/* Submit Button */}
        <button type="submit" style={buttonStyle}>
          Submit Simulation Data
        </button>
      </form>
    </div>
  );
}

export default Input;
