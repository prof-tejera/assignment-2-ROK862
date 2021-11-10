import React from "react";
import AnchorButton from "../buttons/AnchorButton";

function PauseDisplay(props) {
  return (
    <div className="Content-Wraper">
      <div className="StopWatch">{props.displayTime}</div>
      <AnchorButton name="Resume Timer" onClick={props.onResumeTimer} />
      <AnchorButton name="End Timer" onClick={props.onCloseTimer} />
    </div>
  );
}

export default PauseDisplay;
