import React, { useState } from "react";
import "./styleSheet.css";
export default function randomColor() {
  const [typeColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handlePickRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handlePickRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div className="button-container" style={{}}>
        <button onClick={() => handlePickRandomRgbColor()}>
          Create random Rgb color
        </button>
        <button onClick={() => handlePickRandomHexColor()}>
          Create random Hex color
        </button>
      </div>
      <div className = "text-container">
        <p className="text">{color}</p>
      </div>
    </div>
  );
}
