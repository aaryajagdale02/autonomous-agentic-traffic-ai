import { useLocation, Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  console.log("RESULTS PAGE STATE:", location.state);

  // Safety check (handles refresh or direct URL access)
  if (!location.state || !location.state.output) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>No Results Found</h2>
        <p>Please run the simulation from the Input page.</p>
        <Link to="/input">Go to Input</Link>
      </div>
    );
  }

  const { output } = location.state;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Optimized Traffic Signal Results</h1>

      {/* Signal Timings Table */}
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "1.5rem", marginBottom: "2rem" }}
      >
        <thead>
          <tr>
            <th>Signal ID</th>
            <th>Vehicle Density</th>
            <th>Pedestrian Density</th>
            <th>Optimized Green Time (sec)</th>
          </tr>
        </thead>
        <tbody>
          {output.optimized_timings.map((signal) => (
            <tr key={signal.id}>
              <td>{signal.id}</td>
              <td>{signal.vehicle_density}</td>
              <td>{signal.pedestrian_density}</td>
              <td>{signal.green_time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Metrics Section */}
      <h3>Impact Metrics</h3>
      <ul>
        <li>Total Time Saved: {output.metrics.total_time_saved} seconds</li>
        <li>Estimated Fuel Saved: {output.metrics.fuel_saved}</li>
        <li>Estimated CO₂ Reduction: {output.metrics.co2_reduced}</li>
      </ul>
    </div>
  );
}

export default Results;
