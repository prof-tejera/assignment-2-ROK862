import React from "react";
import Options from "../Inputs/Options";
import AnchorButton from "../buttons/AnchorButton";

function DigitalWatch ({displayTime, onStartTiming, onCloseTimer, onSetSeconds, onSetMinutes, onSetHours, currentValues }) {
    return (
      <div className="Content-Wraper">
          <div className="StopWatch">
            <Options
              options={[...Array(24).keys()]}
              onChange={onSetHours}
              current={currentValues.hours || 0}
              name="Hours"
            />
            <Options
              options={[...Array(60).keys()]}
              onChange={onSetMinutes}
              current={currentValues.minutes || 0}
              name="Minutes"
            />
            <Options
              options={[...Array(60).keys()]}
              onChange={onSetSeconds}
              current={currentValues.seconds || 0}
              name="Seconds"
            />
          </div>
          <div className="Preview">
            {displayTime || "00:00:00:00"}
          </div>
          <AnchorButton name="Start timing" onClick={onStartTiming} />
          <AnchorButton name="Close Timer" onClick={onCloseTimer} />
        </div>
    );
}

export default DigitalWatch