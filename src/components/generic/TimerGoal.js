import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../globals/AppProvider";
import { useContext } from "react/cjs/react.development";

function TimerGoal () {
  const { setTimerStatus } = useContext(AppContext);

  return (
    <>
    <div className="Timer-Goal-Wraper">
      <img alt="timer-goal" src="../../images/goal-reached-animation.gif" />
    </div>
    <AnchorButton name="Reset Timer" onClick={()=>setTimerStatus("active")} />
    </>
  );
}

export default TimerGoal