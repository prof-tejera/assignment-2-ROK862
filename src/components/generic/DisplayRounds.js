import React, { useContext } from "react";
import styled from "styled-components";
import Options from "../Inputs/Options";
import AnchorButton from "../buttons/AnchorButton";
import { AppContext } from "../../context/AppProvider";
import { APP_UI_KEYS } from "../../context/settings";
import AppUIStateToggle from "./AppUIStateToggle";

const Title = styled.div`
  font-size: 30px;
`;

// TODO: Convert to functional component,
// TODO: Access getters and setters using context.
const DisplayRounds = ({ name }) => {
  const {
    formattedTime: displayTime,
    onStartTiming,
    onStopTimer: onCloseTimer,
    setSeconds: onSetSeconds,
    setMinutes: onSetMinutes,
    setHours: onSetHours,
    setRounds: onSetRounds,
    rounds,
    interfaceState,
  } = useContext(AppContext);
  const toggleOnSettings = interfaceState === APP_UI_KEYS.FLOW;

  return (
    <div>
      <AppUIStateToggle />
      <Title>{name} XX</Title>
      {toggleOnSettings ? (
        <div className="Preview">{displayTime}</div>
      ) : (
        <div className="Stop-Watch">
          <Options
            options={[...Array(24).keys()]}
            onChange={onSetHours}
            name="Hours"
          />
          <Options
            options={[...Array(60).keys()]}
            onChange={onSetMinutes}
            name="Minutes"
          />
          <Options
            options={[...Array(60).keys()]}
            onChange={onSetSeconds}
            name="Seconds"
          />
        </div>
      )}
      {toggleOnSettings ? (
        <div className="Preview">{rounds}</div>
      ) : (
        <div className="Preview Small">
          <Options
            options={[...Array(11).keys()]}
            onChange={onSetRounds}
            name="Rounds"
          />
        </div>
      )}
      <div className="Preview">
        {displayTime}
      </div>
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
};
//onSetHours onSetMinutes onSetSeconds onSetRounds onConvertToTime onStartTiming onStopTimer
export default DisplayRounds;
