//버튼 클릭 시 숫자가 증가, 감소하기 (리액트가 변수의 값의 상태를 관리, UI그리기)를 해보고싶대여
import React, { useCallback, useRef, useState } from "react";

const initMember = [
  {
    memberid: 1,
    membername: "홍길동1",
    email: "hongGD1@gmail.com",
    active: true,
  },
  {
    memberid: 2,
    membername: "홍길동2",
    email: "hongGD2@gmail.com",
    active: true,
  },
  {
    memberid: 3,
    membername: "홍길동3",
    email: "hongGD3@gmail.com",
    active: false,
  },
];

function StateTestComponent(props) {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  //member/memberList
  const [member, setMember] = useState();
  const [memberList, setMemberList] = useState(initMember);

  //등록 수정 삭제 목록보기
  const nextuser = useRef(4);
  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]:
        e.target.name === "active" ? e.target.cheked : e.target.value,
    });
  };

  const handleMemberAdd = () => {};

  return (
    <div>
      <p>현재 count 값 : {count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
      <h2>멤버등록</h2>
      이름:
      <input name="membername" onChange={handleChange} />
      이메일:
      <input name="email" onChange={handleChange} />
      액티브:
      <input name="active" onChange={handleChange} />
      <button onClick={handleMemberAdd}>멤버 추가</button>
    </div>
  );
}

export default StateTestComponent;
