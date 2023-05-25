import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StateTest(props) {
  var a = 100;
  var b = 200;
  //상대 값이 변경되면 UI가 바뀐다(자동 UI rendering)
  const [count, setCount] = useState(0); // count에 초기값을 0을조라 ,값 변경은 setter이용
  const [myname, setMyname] = useState("홍길돌");
  const [myage, setMyage] = useState(20);

  //1.트정 dom 선택응ㄹ ㅜ이해 사용
  const nameRef = useRef();
  const ageRef = useRef();

  //2. ref 변수 선언1
  var userid1 = 3;
  //변수선언 2(useRef이용)...rendering시 초기화하지 않음
  var userid2 = useRef(3);

  const initMember = [
    { mid: 1, mname: "홍길동", email: "aa@hong", active: true },
    { mid: 2, mname: "홍길동2", email: "aa2@hong", active: true },
  ];
  const [member, setMember] = useState({});
  const [memberList, setMemberList] = useState(initMember);
  const nextMid = useRef(3);

  //useMemo: 연산된 값을 저장해서 재사용 , 오래 걸리는 작업을 매번 하지말자
  const longTimeFunction = (su) => {
    console.log(su + "받아서 계산중");
    for (let i = 1; i <= 1000000; i++) {
      su += 1;
    }
    return su;
  };
  //count가 변경되지 안흔ㄴ다면 계산 결과는 같기 때문에 다시 계산할 필요가 없다
  //계산된 결과를 기억하면 참조켄네 ===useMemo
  //의존 배열에 등록된 변수가 변경시에만 재사용
  var calc = useMemo(() => longTimeFunction(count), [count]);

  //성능 향상을 위해 함수를 렌더링 시 마다 재정의 할 필요 업다
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  useEffect(() => {
    console.log("handleIncerement 시영");
  }, [handleIncrement]);

  const handleChange = (e) => {
    if (e.target.name === "mname") {
      setMyname(e.target.value);
    } else {
      setMyage(e.target.value);
    }
  };
  const handelNameMove = () => {
    nameRef.current.focus();
  };
  const handelAgeMove = () => {
    ageRef.current.focus();
  };
  const handelUserIDIncrement = () => {
    userid1 += 1;
    userid2.current += 1;
    console.log("userid1=" + userid1 + ",userid2=" + userid2.current);
  };

  //memberlist추가
  const handleChange2 = (e) => {
    var values = e.target.name === "active" ? e.target.cheked : e.target.value;

    setMember({ ...member, [e.target.name]: values });
  };
  const handleAdd = (e) => {
    //setMember({...member,mid:nextMid.current,active:true})//setter는 비동기 동작
    var tempMember = { ...member, mid: nextMid.current };
    setMemberList([...memberList, tempMember]);
    nextMid.current += 1;
  };

  //life cycle, []의존배열
  useEffect(() => {
    console.log("1.StateTest 컴포넌트가 load시(mount) 1회발생");
  }, []);
  useEffect(() => {
    console.log(
      "2.StateTest 컴포넌트가 load시(mount)발생----rendering될때마다"
    );
  });
  useEffect(() => {
    console.log(
      "3.StateTest 컴포넌트가 load시(mount) 1회발생---count 변경시마다"
    );
  }, [count]);
  useEffect(() => {
    console.log(
      "4.StateTest 컴포넌트가 load시(mount) 1회발생---count,myname 변경시마다"
    );
  }, [count, myname]);
  //JSX(JavaScript XML) : React문법, 바벨에 의해 컴파일된다(js)->(js) 최신(구)->구(최신)
  //var output="<div></div>"--<></> ,render(output);
  //Root 1개 ,계층 구조 ,반드시 닫는 tag
  return (
    <>
      <div>
        <p>
          {a}--{b} count[{count}] MyName[{myname}] MyAge[{myage}] 오래 걸려
          계산한 값 [{calc}]
        </p>
        <button
          onClick={function () {
            a = a + 1;
          }}
        >
          a값 증가
        </button>
        <button
          onClick={() => {
            b = b + 1;
          }}
        >
          a값 증가
        </button>
        <button onClick={handleIncrement}>count값 증가</button>
        <button onClick={handleDecrement}>count값 감소</button>
        <hr></hr>
        <h1>useRef예제 1.</h1>
        이름:<input ref={nameRef} onChange={handleChange} name="mname"></input>
        나이:
        <input ref={ageRef} onChange={handleChange} name="age" />
        <button onClick={handelNameMove}>이름으로 이동</button>
        <button onClick={handelAgeMove}>나이로 이동</button>
        <hr></hr>
        useRef예제2.
        <button onClick={handelUserIDIncrement}>번호증가</button>
        <hr></hr>
        이름:
        <input onChange={handleChange2} name="mname" />
        이메일:
        <input onChange={handleChange2} name="email" />
        active:
        <input onChange={handleChange2} name="active" type="checkbox" />
        <button onClick={handleAdd}>멤버추가</button>
        <table className="striped borderd hover" border="1">
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>이메일</th>
              <th>액티브</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((item, index) => (
              <tr key={index}>
                <td>{item.mid}</td>
                <td>{item.mname}</td>
                <td>{item.email}</td>
                <td>{item.active != undefined && item.active.toString()}</td>
              </tr>
            ))}
            {/* map안에 ()로 함수처리하면 자동리턴, {}하면 리턴처리 해줘야댐 */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StateTest;
