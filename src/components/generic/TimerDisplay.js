import React from "react";
import AnchorButton from "../buttons/AnchorButton";

function TimerDisplay ({ formatedTime, onPauseTimer }) {
    return (
      <div className="Content-Wraper">
        <div className='StopWatch'>
          {formatedTime}
        </div>
        <AnchorButton name='Pause' onClick={onPauseTimer} />
      </div>
    );
}

export default TimerDisplay