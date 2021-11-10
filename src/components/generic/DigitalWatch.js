import React from "react";
import Options from "../Inputs/Options";
import AnchorButton from "../buttons/AnchorButton";

function DigitalWatch (props) {
    return (
      <div className="Content-Wraper">
          <div className="StopWatch">
            <Options
              options={[...Array(24).keys()]}
              onChange={props.onSetHours}
              current={props.currentValues.hours || 0}
              name="Hours"
            />
            <Options
              options={[...Array(60).keys()]}
              onChange={props.onSetMinutes}
              current={props.currentValues.minutes || 0}
              name="Minutes"
            />
            <Options
              options={[...Array(60).keys()]}
              onChange={props.onSetSeconds}
              current={props.currentValues.seconds || 0}
              name="Seconds"
            />
          </div>
          <div className="Preview">
            {props.displayTime || "00:00:00:00"}
          </div>
          <AnchorButton name="Start timing" onClick={props.onStartTiming} />
          <AnchorButton name="Close Timer" onClick={props.onCloseTimer} />
        </div>
    );
}

export default DigitalWatch