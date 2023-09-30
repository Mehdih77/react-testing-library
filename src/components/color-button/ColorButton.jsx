import { useState } from "react";

export default function ColorButton() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}
