import React, { Component } from "react";

class ClassComp1 extends Component {
  constructor(props) {
    super(props);
    //constructor정의는 필수가 아님
    //constructor정의시 반드시 부모생성자 호출이 필요하다.
    console.log("ClassComp1 constructor");
    this.state = { title: "초기값", buttonVisible: false };
  }
  componentDidMount() {
    console.log("ClassComp1 componentDidMount");
  }
  componentDidUpdate() {
    console.log("ClassComp1 componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ClassComp1 componentWillUnmount");
  }

  reset = () => {
    this.setState({ title: "초기값!!!", buttonVisible: false });
  };

  render() {
    console.log("부모가 rendering.....");
    const { title, buttonVisible } = this.state;
    return (
      <>
        <div>
          <button onClick={() => this.setState({ buttonVisible: true })}>
            자식보이기
          </button>
          {buttonVisible && (
            <div>
              <ChildComponent title={title} />
              <button onClick={this.reset}> 다시 시작</button>
            </div>
          )}
        </div>
      </>
    );
  }
}

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("ChildComponent constructor");
  }
  componentDidMount() {
    console.log("ChildComponent componentDidMount");
  }
  componentDidUpdate() {
    console.log("ChildComponent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ChildComponent componentWillUnmount");
  }

  render() {
    console.log("자식이 rendering.....");
    return (
      <div>
        <p>ChildComponent에서 부모가 보낸준 속성읽기 : {this.props.title}</p>
      </div>
    );
  }
}

// render() {
//   //class 컴포넌트에서는   render()함수는 필수
//   return (
//     <div style={{ color: this.props.color }}>
//       <h1>ClassComponent1</h1>
//       <p>1.title:{this.props.title}</p>
//       <p>2.content:{this.props.content}</p>
//       <p>3.children:{this.props.children}</p>
//       <p>4.price:{this.props.price}</p>
//       <ul>
//         {this.props.subject &&
//           this.props.subject.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }

class ClassComp2 extends Component {
  static defaultProps = {
    title: "ClassComp2 title값없음",
    content: "ClassComp2 content값없음",
    price: 777,
  };

  render() {
    const { title, content, children, price, subject, color } = this.props;
    return (
      <div style={{ color: color }}>
        <h1>ClassComponent2</h1>
        <p>1.title:{title}</p>
        <p>2.content:{content}</p>
        <p>3.children:{children}</p>
        <p>4.price:{price}</p>
        <ul>
          {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export { ClassComp1, ClassComp2 };
