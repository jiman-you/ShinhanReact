import React, { useState } from "react";

function FunctionComponent2(props) {
  const [username, setUsername] = useState("홍길동");
  const [sendmsg, setSendmsg] = useState("반가워라");

  var handleNameChanege = (e) => {
    setUsername(e.target.value);
  };
  const handleMsgChanege = (e) => {
    setSendmsg(e.target.value);
  };
  const handleClear = (e) => {
    setUsername("");
    setSendmsg("");
  };

  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState(["바나나", "오렌지"]);

  var handleFruitAdd = (e) => {
    setFruit(e.target.value);
  };
  var handleCartAppend = (e) => {
    setFruitList([...fruitList, fruit]);
  };

  return (
    <div>
      <h1>username:{username}</h1>
      <h1>sendmsg:{sendmsg}</h1>
      <input
        type="text"
        placeholder="이름잉ㅂ력"
        onChange={handleNameChanege}
        value={username}
      />
      <input
        type="text"
        placeholder="이름잉ㅂ력"
        value={sendmsg}
        onChange={handleMsgChanege}
      />
      <button onClick={handleClear}>지우기</button>
      <hr></hr>
      <input onChange={handleFruitAdd} />
      <button onClick={handleCartAppend}>장바구니추가</button>
      <ul>
        {fruitList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FunctionComponent2;
