import FucntionComponentLifeCycle from "components2/FucntionComponentLifeCycle";
import FunctionComponent2 from "components2/FunctionComponent2";
import MemberCom from "components2/MemberCom";
import MyCounter from "components2/MyCounter";
import MyCounterFunctionComp from "components2/MyCounterFunctionComp";
import MyStyleChange from "components2/MyStyleChange";
import { MyTimer } from "components2/MyTimer";
import SmartHome from "components3/SmartHome";
import StateTest from "components3/StateTest";
import StateTestComponent from "components4/StateTestComponent";
import React, { useState } from "react";

function AppStart4(props) {
  const [showYN, setShowYN] = useState(true);
  return (
    <div>
      <StateTestComponent />
      {/* <MyCounter />
      <MyCounterFunctionComp />
      <MyStyleChange />
      <MemberCom />
      <FunctionComponent2 />
      <FucntionComponentLifeCycle />
      {showYN && <MyTimer />}
  <SmartHome />
      <StateTest />
      <button
        onClick={() => {
          setShowYN(!showYN);
        }}
      >
        타이머시작또는중지
      </button> */}
    </div>
  );
}

export default AppStart4;
