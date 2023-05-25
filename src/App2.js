import React from "react";
import { Header, HeaderF1 } from "./components1/Myheader";
import {
  Mynavigation,
  Mynavigation2,
  Myscore,
} from "./components1/Mynavigation";
import Mysection, { Mysection2 } from "./components1/Mysection";

function App2(props) {
  console.log("Myscore" + Myscore);
  var subject = "";
  console.log(true && "hello"); // hello
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // null
  console.log(undefined && "hello"); // undefined
  console.log("" && "hello"); // ''
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello

  return (
    <div>
      {/* 3항 연산자 */}
      {Myscore >= 100 ? (
        <strong>{Myscore}Good~~~</strong>
      ) : (
        <i>{Myscore} 노력!!!</i>
      )}
      {/* 조건부 렌더링 */}
      {Myscore >= 100 && <strong>{Myscore}Good~~~</strong>}

      <h1>{subject ? subject : "과목없음"}</h1>
      <h1>{subject && "과목없음"}</h1>
      <p>
        여기:{null},{false},{undefined}
      </p>
      <Header></Header>
      <HeaderF1></HeaderF1>
      <Mynavigation></Mynavigation>
      <Mynavigation2></Mynavigation2>
      <Mysection></Mysection>
      <Mysection2 />
    </div>
  );
}

export default App2;
