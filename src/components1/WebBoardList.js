//webboard 여러 건 table로 보여주기...component로 만들기
import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function WebBoardList(props) {
  const arr = [
    { bno: 1, title: "연습1", content: "React", writer: "지만" },
    { bno: 2, title: "연습2", content: "JSX", writer: "jiman" },
    { bno: 3, title: "연습3", content: "몰라", writer: "wlaks" },
  ];
  var tableStyle = {
    border: "1px solid red",
  };
  return (
    <div>
      <Button variant="secondary">Secondary</Button>{" "}
      <table style={tableStyle} border={1}>
        <thead>
          <tr>
            <td>bno</td>
            <td>title</td>
            <td>content</td>
            <td>writer</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index} style={{ backgroundColor: "red" }}>
              <td>{item.bno}</td>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WebBoardList;
