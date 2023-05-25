import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCounterFunctionComp(props) {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("function컴포넌트이용 counter");
  const handleClick = (event) => {
    var btnContent = event.target.innerHTML;
    if (btnContent === "증가") {
      setCount(count + 1);
      setMsg(btnContent);
    } else {
      setCount(count - 1);
      setMsg(btnContent);
    }
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <h2>message:{msg}</h2>
      <button onClick={handleClick} variant="outline-success">
        증가
      </button>
      <button onClick={handleClick}>감소</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        variant="outline-success"
      >
        증가
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        감소
      </button>
    </div>
  );
}

export default MyCounterFunctionComp;
