import React, { useState } from "react";

function MemberCom(props) {
  const [member, setMember] = useState({ name: "아무개", age: 30 });
  const handleNameChange = (e) => {
    setMember({ ...member, name: e.target.value });
  };
  const handleAgeChange = (e) => {
    setMember({ ...member, age: e.target.value });
  };
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>
        이름은 {member.name} 나이는 {member.age}
      </h1>
      이름:
      <input type="text" onChange={handleNameChange} />
      나이:
      <input type="number" onChange={handleAgeChange} />
      이름:
      <input type="text" onChange={handleChange} name="name" />
      나이:
      <input type="number" onChange={handleChange} name="age" />
    </div>
  );
}

export default MemberCom;
