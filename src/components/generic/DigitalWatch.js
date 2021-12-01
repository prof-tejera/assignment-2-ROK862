import React, { useContext } from "react";
import Options from "../Inputs/Options";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../context/AppProvider";
import AppUIStateToggle from "./AppUIStateToggle";
import { APP_UI_KEYS } from "../../context/settings";

function DigitalWatch() {
  // Simplify the code in parent component by getting getters and setters straigt from context
  // At this level, i think it is still manage-able. However, you'll be the judge of it :).
  const {
    formattedTime: displayTime,
    onStartTiming,
    onStopTimer: onCloseTimer,
    setSeconds: onSetSeconds,
    setMinutes: onSetMinutes,
    setHours: onSetHours,
  } = useContext(AppContext);
  const { hours, minutes, seconds, interfaceState } = useContext(AppContext);
  const toggleOnSettings = (interfaceState !== APP_UI_KEYS.FLOW);

  return (
    <div className="Content-Wrapper">
      <AppUIStateToggle />
      {toggleOnSettings && <div className="Stop-Watch">
        <Options
          options={[...Array(24).keys()]}
          onChange={onSetHours}
          current={hours || 0}
          name="Hours"
        />
        <Options
          options={[...Array(60).keys()]}
          onChange={onSetMinutes}
          current={minutes || 0}
          name="Minutes"
        />
        <Options
          options={[...Array(60).keys()]}
          onChange={onSetSeconds}
          current={seconds || 0}
          name="Seconds"
        />
      </div>}
      <div className="Preview">{displayTime || "00:00:00:00"}</div>
      <div className="Action-Wrapper">
        <AnchorButton
          name="Start timing"
          className="Special"
          onClick={onStartTiming}
        />
        <AnchorButton name="Close Timer" onClick={onCloseTimer} />
      </div>
    </div>
  );
}

export default DigitalWatch;
