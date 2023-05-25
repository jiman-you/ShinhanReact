import React from "react";
import "components1/external.css";

function MyJSXTest(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };
  const test1 = "react ....JSX문법";
  const arr = [
    "Java",
    "SQL",
    "CSS",
    "HTML",
    "JS",
    "jQuery",
    "Spring",
    "JSP/Servet",
  ];
  const arrlist = arr.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h1 className="myStyle2">{test1}</h1>
      <ul style={inlineStyle}>{arrlist}</ul>
      <hr></hr>
      <ul
        style={{ border: "3px dotted green", color: "blue", fontSize: "30px" }}
      >
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyJSXTest;
