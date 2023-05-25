import React from 'react';

export function Mynavigation(props) {
    console.log("Mynavigation----Mynavigation component")
    return (
        <div>
            <nav>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </nav>
            <hr/>
         </div>    
    );
}

export const Myscore = 100;
export function Mynavigation2(){
    return(
        <div>
            <p>Mynavigation파일에 있는 Mynavigation2메서드</p>
        </div>
    );
}