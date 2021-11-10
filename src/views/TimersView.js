import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

import { APP_RENDER_STATES, shouldRender } from "../globals/globals";

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
  const timers = [
    { title: "Time your training with a stop watch.", subTitle: "Let's get you started with a normal timed session. Time your workout and get feedback from the app in realtime.", C: <Stopwatch />, S:APP_RENDER_STATES.STOPWATCH },
    { title: "Set a timed goal, and track your progress.", subTitle: "Be proactive! Let's prepare your training session by setting timed goals.", C: <Countdown recId={1} />, S:APP_RENDER_STATES.COUNTDOWN },
    { title: "Goal driven session, with rounds.", subTitle: "Awesome, now let's take this a step further. Set timed goals with multiple rounds.", C: <XY />, S:APP_RENDER_STATES.XY },
    { title: "Now, we need to pace your training.", subTitle: "Take a training session with breaks across measurable intervals.", C: <Tabata />, S:APP_RENDER_STATES.TABATA },
  ];

  return (
    <>
      <Timers>
        {timers.map((timer) => (
          (shouldRender({state:timer.S})) ? 
          <Timer>
            <TimerTitle>{timer.title}</TimerTitle>
            <TimerSubtitle>{timer.subTitle}</TimerSubtitle>
            {timer.C}
          </Timer>
          : <></>
        ))}
      </Timers>
      <TimerList>
        
      </TimerList>
    </>
  );
}

export default App;
