import React from "react";

var score1 = 100;
const score2 = 200;

function FunctionComp1(args) {
  //JSX : root가 한개, tag 열기닫기, 계층 구조
  //조건부 연산 : ㅁ&&ㅠ =>ㅁ가 참이면 ㅠ를 한다, 거짓이면 수행안한다
  return (
    <div>
      <h1 style={{ color: args.color }}>FunctionComp1</h1>
      <p>1.title{args.title}</p>
      <p>2.content:{args.content}</p>
      <p> 3.chidren: args.children</p>
      <ul>
        {args.subject &&
          args.subject.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

function FunctionComp2({ title, content, price, children, subject, color }) {
  return (
    <div>
      <h1 style={{ color: color }}>FunctionComp2</h1>
      <p>1.title{title}</p>
      <p>2.content:{content}</p>
      <p> 3.chidren: {children}</p>
      <p>4.price:{price}</p>
      <ul>
        {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export { score1, score2, FunctionComp1, FunctionComp2 as default };
