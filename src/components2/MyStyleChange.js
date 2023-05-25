import React, { useState } from "react";

function MyStyleChange(props) {
  const [color, setColor] = useState("black");
  const [mystyle, setMystyle] = useState({
    color: "red",
    border: "1px solid red",
  });
  const handleColorChange = (e) => {
    var targetContent = e.target.innerHTML;
    setColor(targetContent);
    setMystyle({ color: targetContent, border: `1px solid ${targetContent}` });
  };
  return (
    <div>
      <h1 style={mystyle}> 칼라 변경하기1....{color}</h1>
      <h1 style={{ color: color }}> 칼라 변경하기2</h1>
      <h1 style={{ color }}> 칼라 변경하기3</h1>
      <button onClick={handleColorChange}>red</button>
      <button onClick={handleColorChange}>blue</button>
      <button onClick={handleColorChange}>pink</button>
    </div>
  );
}

export default MyStyleChange;
