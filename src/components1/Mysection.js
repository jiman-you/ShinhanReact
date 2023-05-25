import React from "react";

function Mysection(props) {
  console.log("Mysection----Mysection component");
  return (
    <>
      <section>
        <article>
          <h1>React 학습</h1>
          <p>Props</p>
          <p>state</p>
          <p>Component</p>
          <hr></hr>
        </article>
      </section>
      <hr></hr>
    </>
  );
}

function Mysection2() {
  return (
    <div>
      <p>Mysection2컴포넌트</p>
    </div>
  );
}

export { Mysection2, Mysection as default };
