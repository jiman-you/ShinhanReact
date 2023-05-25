import React, { useState } from "react";

function Boardtest(props) {
  const [board, setBoard] = useState({
    bno: "",
    title: "",
    content: "",
    writer: "",
  });
  const [boardList, setBoardList] = useState([board]);

  const boardAdd = (e) => {
    var aa = {};
    aa.bno = document.getElementById("bno").value;
    aa.title = document.getElementById("title").value;
    aa.content = document.getElementById("content").value;
    aa.writer = document.getElementById("writer").value;

    setBoardList([...boardList, aa]);
    console.log(aa);
    console.log(boardList);
  };
  return (
    <div>
      <table>
        <tr>
          <td>bno</td>
          <td>title</td>
          <td>content</td>
          <td>writer</td>
        </tr>
        {boardList.map((item, index) => (
          <tr key={index}>
            <td>{item.bno}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.writer}</td>
          </tr>
        ))}
      </table>
      <input type="number" placeholder="보드번호" id="bno" name="bno"></input>
      <input type="text" placeholder="타이틀" id="title" name="title"></input>
      <input type="text" placeholder="내용" id="content" name="content"></input>
      <input type="text" placeholder="작성자" id="writer" name="writer"></input>
      <button onClick={boardAdd}>보드입력</button>
    </div>
  );
}

export default Boardtest;
