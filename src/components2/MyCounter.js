import React, { Component } from "react";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, msg: "class 컴포넌트 이용 counter임" };
  }

  handleClick = (event) => {
    var btnContent = event.target.innerHTML;
    console.log(btnContent);
    if (btnContent === "증가") {
      this.setState({ count: this.state.count + 1, msg: btnContent });
    } else {
      this.setState({ count: this.state.count - 1, msg: btnContent });
    }
  };

  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <h2>message:{this.state.msg}</h2>

        <button onClick={this.handleClick}>증가</button>
        <button onClick={this.handleClick}>감소</button>

        <button
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
              msg: e.target.innerHTML,
            });
          }}
        >
          증가
        </button>
        <button
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
              msg: e.target.innerHTML,
            });
          }}
        >
          감소
        </button>
      </div>
    );
  }
}

export default MyCounter;
