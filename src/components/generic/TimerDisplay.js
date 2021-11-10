import React from "react";
import AnchorButton from "../buttons/AnchorButton";

function TimerDisplay (props) {
    return (
      <div className="Content-Wraper">
        <div className='StopWatch'>
          {props.formatedTime}
        </div>
        <AnchorButton name='Pause' onClick={props.onPauseTimer} />
      </div>
    );
}

export default TimerDisplay