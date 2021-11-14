import React, { useContext } from "react";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../context/AppProvider";
import { APP_RENDER_KEYS } from "../../context/settings";

function TimerDisplay() {
  const {
    currentTimer,
    workflowState,
    rounds,
    formattedTime: displayTime,
    setTimerStatus: onPauseTimer,
    onSkipRound,
  } = useContext(AppContext);

  const renderState = () => {
    switch (currentTimer) {
      case APP_RENDER_KEYS.XY:
        return (
          <div className="Content-Wrapper">
            <div className="Timer-Tittle">{workflowState}</div>
            <div className="Stop-Watch">{displayTime}</div>
            <pre className="Rounds-Preview">Rounds: {rounds}</pre>
            <AnchorButton name="Pause" onClick={() => onPauseTimer("paused")} />
            <AnchorButton name="Next Round" onClick={() => onSkipRound()} />
          </div>
        );
      case APP_RENDER_KEYS.TABATA:
        return (
          <div className="Content-Wrapper">
            <div className="Stop-Watch">{displayTime}</div>
            <pre className="Rounds-Preview">Rounds: {rounds}</pre>
            <AnchorButton name="Pause" onClick={() => onPauseTimer("paused")} />
            <AnchorButton name="Next Round" onClick={() => onSkipRound()} />
          </div>
        );
      default:
        return (
          <div className="Content-Wrapper">
            <div className="Stop-Watch">{displayTime}</div>
            <AnchorButton name="Pause" onClick={() => onPauseTimer("paused")} />
          </div>
        );
    }
  };
  return <>{renderState()}</>;
}

export default TimerDisplay;
