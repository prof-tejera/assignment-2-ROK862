import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../globals/AppProvider";
import { useContext } from "react/cjs/react.development";

function TimerDisplay () {
  const { formattedTime:displayTime, setTimerStatus:onPauseTimer } = useContext(AppContext);

  return (
    <div className="Content-Wraper">
      <div className='StopWatch'>
        {displayTime}
      </div>
      <AnchorButton name='Pause' onClick={() => onPauseTimer("paused")} />
    </div>
  );
}

export default TimerDisplay