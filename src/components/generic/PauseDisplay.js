import React, { useContext } from "react";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../context/AppProvider";

function PauseDisplay () {
  // Simplify the code in parent component by getting getters and setters straigt from context
  // At this level, i think it is still manage-able. However, you'll be the judge of it :).
  const { formattedTime:displayTime, setTimerStatus:onResumeTimer, onStopTimer:onCloseTimer } = useContext(AppContext);
  return (
    <div className="Content-Wrapper">
      <div className="Stop-Watch">{displayTime}</div>
      <AnchorButton name="Resume Timer" onClick={() => onResumeTimer("timing")} />
      <AnchorButton name="Reset Timer" onClick={onCloseTimer} />
    </div>
  );
}

export default PauseDisplay;
