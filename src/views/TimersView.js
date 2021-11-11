import React from "react";
import styled from "styled-components";
import { sys } from "../utils/helpers";

import { APP_TIMERS, shouldRender } from "../globals/Consts";


const Timers = styled.div`
align-items: center;
width: 100%;
height: 100%;
overflow-y: scroll;
display: inline-block;
`;

const Timer = styled.div`
font-size: 2.0rem;
padding: 2%;
background: #fff8fc;
margin: 5% auto 25% auto;
width: 35%;
min-height: 250px;
border-radius: 5px;
display: block;
box-shadow: 10px 30px 40px 5px #0000001a;
color: #000000;
text-align: center;
font-weight: bold;
border-bottom: 2px solid #f408a6;
`;

const TimerTitle = styled.div`
font-size: 1.5rem;
`;
const TimerSubtitle = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
font-size: 15px;
padding: 50px;
font-weight: 400;
padding-top: 15px;
`;

const TimerList = styled.div`

`;

function App() {
  const timers = APP_TIMERS;


  // Mmm. Seem's as though react doesnt like it when i map through an array and generate html components without a {key}.
  // React needs a point of reference to track changes when it does updates.
  // Hence, i added keys to elements and basically manage them with an index.
  return (
    <>
      <Timers>
        {timers.map((timer,i) => (
          (shouldRender({state:timer.S})) ? 
          <Timer key={sys.getKey()}>
            <TimerTitle key={sys.getKey()}>{timer.title}</TimerTitle>
            <TimerSubtitle key={sys.getKey()}>{timer.subTitle}</TimerSubtitle>
            {timer.C}
          </Timer>
          : <div key={sys.getKey()}></div>
        ))}
      </Timers>
      <TimerList>
        
      </TimerList>
    </>
  );
}

export default App;
