import React, { useContext } from "react";
import Options from "../Inputs/Options";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../context/AppProvider";
import { APP_RENDER_KEYS, APP_UI_KEYS } from "../../context/settings";
import AppUIStateToggle from "./AppUIStateToggle";

function DigitalRounds() {
  // Simplify the code in parent component by getting getters and setters straigt from context
  // At this level, i think it is still manage-able. However, you'll be the judge of it :).
  const {
    currentTimer,
    setRounds,
    formattedTime: displayTime,
    formattedBreakTime: displayBreakTime,
    onStartTiming,
    onStopTimer: onCloseTimer,
    setSeconds: onSetSeconds,
    setMinutes: onSetMinutes,
    setHours: onSetHours,
  } = useContext(AppContext);
  const { rounds, hours, minutes, seconds } = useContext(AppContext);
  const {
    setBreakHours: onSetBreakHours,
    setBreakMinutes: onSetBreakMinutes,
    setBreakSeconds: onSetBreakSeconds,
  } = useContext(AppContext);
  const { breakHours, breakMinutes, breakSeconds, interfaceState } =
    useContext(AppContext);
  const toggleOnSettings = interfaceState !== APP_UI_KEYS.FLOW;

  const renderState = () => {
    switch (currentTimer) {
      case APP_RENDER_KEYS.XY:
        return (
          <div className="Content-Wrapper">
            <AppUIStateToggle />
            <pre className="Title-Wrapper">Workout Duration</pre>
            {!toggleOnSettings ? (
              <div className="Preview Small">{displayTime}</div>
            ) : (
              <div className="Stop-Watch">
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
              </div>
            )}
            <pre className="Title-Wrapper">Break Duration</pre>
            {!toggleOnSettings ? (
              <div className="Preview Small">{displayBreakTime}</div>
            ) : (
              <div className="Stop-Watch">
                <Options
                  options={[...Array(24).keys()]}
                  onChange={onSetBreakHours}
                  current={breakHours || 0}
                  name="Hours"
                />
                <Options
                  options={[...Array(60).keys()]}
                  onChange={onSetBreakMinutes}
                  current={breakMinutes || 0}
                  name="Minutes"
                />
                <Options
                  options={[...Array(60).keys()]}
                  onChange={onSetBreakSeconds}
                  current={breakSeconds || 0}
                  name="Seconds"
                />
              </div>
            )}

            <div className="Preview">
              {!toggleOnSettings ? (
                <>
                  <pre className="Title-Wrapper">Rounds</pre>
                  <div className="Preview Small">{rounds}</div>
                </>
              ) : (
                <>
                  <Options
                    options={[...Array(30).keys()]}
                    onChange={setRounds}
                    current={rounds || 0}
                    name="Rounds"
                  />
                </>
              )}
            </div>
            <div className="Action-Wrapper">
              <AnchorButton
                name="Start Timing"
                className="Special"
                onClick={onStartTiming}
              />
              <AnchorButton name="Close Timer" onClick={onCloseTimer} />
            </div>
          </div>
        );
      default:
        return (
          <div className="Content-Wrapper">
            <AppUIStateToggle />
            {!toggleOnSettings ? (
              <>
                <pre className="Title-Wrapper">Time</pre>
                <div className="Preview Small">{displayTime}</div>
              </>
            ) : (
              <div className="Stop-Watch">
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
              </div>
            )}
            {!toggleOnSettings ? (
              <>
                <pre className="Title-Wrapper">Rounds</pre>
                <div className="Preview Small">{rounds}</div>
              </>
            ) : (
              <div className="Preview">
                {displayTime || "00:00:00:00"}
                <Options
                  options={[...Array(30).keys()]}
                  onChange={setRounds}
                  current={rounds || 0}
                  name="Rounds"
                />
              </div>
            )}
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
  };
  return <>{renderState()}</>;
}

export default DigitalRounds;
