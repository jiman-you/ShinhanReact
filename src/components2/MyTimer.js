const { useState, useEffect } = require("react");

export const MyTimer = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  //내부함수 익명함수 화살표함수
  const now = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    setCurrentTime(`${h}:${m}:${s}`);
    console.log("타이머실행");
  };
  useEffect(() => {
    const timer = setTimeout(now, 1000); //1초 후 1회 발생
    return () => {
      console.log("useEffect...cleanup 연습");
      clearTimeout(timer);
    };
  }, [currentTime]); //[]의존함수, 최초 mount시 수행하고 currentTime변경시 마다 수행
  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
};
