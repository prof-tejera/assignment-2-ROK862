import React from "react";
import AnchorButton from "../buttons/AnchorButton";

function PauseDisplay({displayTime, onResumeTimer, onCloseTimer}) {
  return (
    <div className="Content-Wraper">
      <div className="StopWatch">{displayTime}</div>
      <AnchorButton name="Resume Timer" onClick={onResumeTimer} />
      <AnchorButton name="Reset Timer" onClick={onCloseTimer} />
    </div>
  );
}

export default PauseDisplay;
