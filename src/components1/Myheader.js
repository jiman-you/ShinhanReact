import React from 'react';

function Header(props) {
    console.log("Mtheader.js의 사용자정의 --- Header컴포넌트")
    return (
        <header>
            <h1>반갑습니다....</h1>
            <h2>React배우기전 선수지식은?</h2>
            <hr/>
         </header>

    );
}

function HeaderF1(){
    return(
        <div>
            <p>Myheader.js의 HeaderF1함수이다</p>
        </div>
    );
}


export  {Header,HeaderF1};