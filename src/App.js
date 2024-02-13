import "./styles.css";
import { useMemo, useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(190);
  const [bmi, setBmi] = useState("");

  const calculateBmi = (height, weight) => {
    const heightMeter = height / 100;
    const bmi = weight / (heightMeter * heightMeter);
    setBmi(bmi.toFixed(2));
  };

  const kucukMemo = useMemo(() => {
    calculateBmi(height, weight);
    return bmi;
  }, [height, weight]);

  return (
    <div className="App">
      <h2>
        Calculate your <span style={{ textDecoration: "underline" }}>BMI</span>{" "}
        today!
      </h2>
      <div className="weightArea">
        <input
          onChange={(e) => setWeight(e.target.value)}
          id="kg"
          type="range"
          name="kg"
          min={40}
          max={150}
          value={weight}
          step={0.5}
          default={50}
        />
        <label htmlFor="kg">{weight} KG</label>
      </div>
      <div className="heightArea">
        <input
          onChange={(e) => setHeight(e.target.value)}
          id="cm"
          type="range"
          name="cm"
          min={110}
          max={220}
          value={height}
          step={0.5}
          default={150}
        />
        <label htmlFor="cm">{height} CM</label>
      </div>
      <br />
      <div className="results">{kucukMemo === Infinity ? "" : kucukMemo}</div>
    </div>
  );
}
