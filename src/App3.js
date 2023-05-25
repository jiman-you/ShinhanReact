import React from "react";
import FunctionComp2, {
  score1,
  score2,
  FunctionComp1,
} from "components2/FunctionComponent1";
import { ClassComp1, ClassComp2 } from "components2/ClassComponent1";
import { propTypes } from "prop-types";

function App3(props) {
  console.log(score1, score2);
  const arr = ["html", "css", "js", "react"];
  return (
    <div>
      <p>score 1:{score1}</p>
      <p>score 2 : {score2}</p>
      <FunctionComp1
        title="f1"
        content="funccom1"
        price={100}
        children="gg"
        subject={arr}
        color="pink"
      >
        aa
      </FunctionComp1>
      <FunctionComp2
        title="f2"
        content="funccom1"
        proce={100}
        subject={arr}
        color="red"
      >
        cc
      </FunctionComp2>
      <ClassComp1
        title="class1"
        content="classcomp1"
        price={300}
        subject={arr}
        color="blue"
      >
        bb
      </ClassComp1>
      <ClassComp2 subject={arr} color="green">
        bb
      </ClassComp2>
    </div>
  );
}

ClassComp2.defaultProps = {
  title: "값업슨",
  content: "콘텐츠",
  ptice: 99,
};

// FunctionComp1.protoTypes = {
//   title: propTypes.string,
//   content: propTypes.string,
//   price: propTypes.number.isRequired,
// };
export default App3;
