import { useState } from "react";
import "./App.css";
import locations from "./data";

function App() {
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleBhkChange = (e) => {
    setBhk(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to predict price based on location, area, and bhk
  };

  return (
    <div className="container">
      <h1 className="head">HOUSE PRICE PREDICTOR</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select name="location" value={location} onChange={handleLocationChange}>
            <option value="" disabled>
              Select Location
            </option>
            {locations.map((option) => (
              <option key={option} value={option.toUpperCase()}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="area">Area in sqft</label>
          <input type="number" id="area" name="area" value={area} onChange={handleAreaChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bhk">BHK</label>
          <input type="number" id="bhk" name="bhk" value={bhk} onChange={handleBhkChange} />
        </div>
        <button type="submit" className="submit">
          SUBMIT
        </button>
      </form>
      <div className="result">
        <h2>Predicted Price</h2>
        <p>Rs 1.3L</p>
      </div>
    </div>
  );
}

export default App;
