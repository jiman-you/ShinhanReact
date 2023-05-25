import React, { useEffect, useState } from "react";

function FucntionComponentLifeCycle(props) {
  const [fruit, setFruit] = useState("");
  const [board, setBoard] = useState("");
  useEffect(() => {
    console.log("렌더링 될때마다 실행");
  });
  useEffect(() => {
    console.log("fruit가 변경 될때마다 실행+ 최초 마운트시 실행횐다");
  }, [fruit]);

  useEffect(() => {
    console.log("fruit또는 board가 변경 될때마다 실행+ 최초 마운트시 실행횐다");
    return () => {
      console.log("지워질때 어카냐");
    };
  }, [fruit, board]);

  const handleChange = (e) => {
    setFruit(e.target.value);
  };
  const handleChange2 = (e) => {
    setBoard(e.target.value);
  };
  return (
    <div>
      <h1>
        function 컴포넌트 라이프사이클 확인:{fruit}...{board}
      </h1>
      <input onChange={handleChange} />
      <input onChange={handleChange2} />
    </div>
  );
}

export default FucntionComponentLifeCycle;
