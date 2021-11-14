import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import AnchorButton from "../buttons/AnchorButton";
import { APP_RENDER_KEYS } from "../../context/settings";

const TimerToolBar = () => {
    const { setCurrentTimer, status, currentTimer } = useContext(AppContext);
    const accessToggle = (status === "timing") ? "inactive" : "active";

    return (
        <div className={`Timer-List ${accessToggle}`}>
            <AnchorButton
            className={currentTimer===APP_RENDER_KEYS.COUNTDOWN ? "Selected" : ""}
            name={APP_RENDER_KEYS.COUNTDOWN}
            onClick={() => setCurrentTimer(APP_RENDER_KEYS.COUNTDOWN)}
            />
            <AnchorButton
            className={currentTimer===APP_RENDER_KEYS.TABATA ? "Selected" : ""}
            name={APP_RENDER_KEYS.TABATA}
            onClick={() => setCurrentTimer(APP_RENDER_KEYS.TABATA)}
            />
            <AnchorButton
            className={currentTimer===APP_RENDER_KEYS.STOPWATCH ? "Selected" : ""}
            name={APP_RENDER_KEYS.STOPWATCH}
            onClick={() => setCurrentTimer(APP_RENDER_KEYS.STOPWATCH)}
            />
            <AnchorButton
            className={currentTimer===APP_RENDER_KEYS.XY ? "Selected" : ""}
            name={APP_RENDER_KEYS.XY}
            onClick={() => setCurrentTimer(APP_RENDER_KEYS.XY)}
            />
        </div>
    )
}

export default TimerToolBar;