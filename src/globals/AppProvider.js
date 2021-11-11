import React, { useState, useEffect } from "react";
import { sys } from "../utils/helpers";
import { playAudio } from "../audio/SoundEffect";
import { APP_RENDER_STATES, setTimerToDisplay } from "./Consts";

export const AppContext = React.createContext({
  status: "inactive",
  setTimerStatus: () => {},
  hours: 0,
  setHours: (val) => {},
  minutes: 0,
  setMinutes: (val) => {},
  seconds: 0,
  setSeconds: (val) => {},
  breakHours: 0,
  setBreakHours: (val) => {},
  breakMinutes: 0,
  setBreakMinutes: (val) => {},
  breakSeconds: 0,
  setBreakSeconds: (val) => {},
  workoutStatus: "",
  setWorkoutStatus: (val) => {},
  formattedTime: "",
  setformattedTime: (val) => {},
  currentTime: "",
  setCurrentTime: (val) => {},
  setOnReachedGoal: () => {},
  onStartTiming: (val) => {},
  onStopTimer: (val) => {},
  workflowState: "Workout",
  setWorkflowState: (val) => {},
  currentTimer: "COUNTDOWN",
  setCurrentTimer: (val) => {},
  shouldRender: (val) => {}
});

const AppProvider = ({ children }) => {
  const [status, setTimerStatus] = useState("inactive");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [breakHours, setBreakHours] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [workoutStatus, setWorkoutStatus] = useState("Workout");
  const [formattedTime, setformattedTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [workflowState, setWorkflowState] = useState(
    APP_RENDER_STATES.COUNTDOWN
  );
  const [currentTimer, setCurrentTimer] = useState(APP_RENDER_STATES.COUNTDOWN);

  const shouldRender = ({ state }) => {
    return currentTimer === state;
  }

  useEffect(() => {
    const formattedTime = sys.onConvertToTime({
      hours,
      minutes,
      seconds,
    });
    setformattedTime(formattedTime);
  }, [hours, minutes, seconds]);

  // Update constants for timer to render.
  // Perhaps not the best approuch, since i have values for currentTimer to display
  // within the context, and it's shared accross the application.
  
  // Hmm, Will think about this approuch.
  useEffect(() => {
    setTimerToDisplay(currentTimer);
  }, [currentTimer]);

  // Handle Stop Timer button onclick here.
  const onStopTimer = () => {
    setTimerStatus("inactive");
    setCurrentTime(0);
    playAudio({ clip: "onClick" });
  };

  // Handle start timing button onclick here.
  const onStartTiming = () => {
    let timeInSeconds = 0;
    if (currentTimer === APP_RENDER_STATES.COUNTDOWN) {
      timeInSeconds = sys.onConvertToSeconds({ hours, minutes, seconds })
    }

    setTimerStatus("timing");
    setCurrentTime(timeInSeconds);
    playAudio({ clip: "timing" });
  };

  const onReachedGoal = () => {
    setTimerStatus("complete");
    playAudio({ clip: "onClick" });
  };

  // This hook handles the tick function, and cleanup of interval before next render.
  useEffect(() => {
    // Check if we are allowed to start the tick function.
    if (status !== "timing") return;

    const timeout = setTimeout(() => {
      // TODO: change state to complete once the interval has been reached.
      const newTime = (currentTimer === APP_RENDER_STATES.COUNTDOWN) ? currentTime - 1.0 : currentTime + 1.0;
      const target = sys.onConvertToSeconds({ hours, minutes, seconds });

      // Test if the timer has reached its goal.
      if (newTime < 0 && currentTimer === APP_RENDER_STATES.COUNTDOWN) {
        onReachedGoal();
        return;
      } else if (newTime >= target) {
        onReachedGoal();
        return;
      }

      // Set the display time, which is to be use for display in the digital watch display.
      const formattedTime = sys.onConvertToTime({ input: newTime });

      // Set state values for formated time, and new current time.
      setformattedTime(formattedTime);
      setCurrentTime(newTime);
    }, 1000);

    return () => {
      // Lets clean up the timeout object to avoid memory leaking.
      clearTimeout(timeout);
    };
    // Monitor both the current time and status to alsp
    // allow trigger once the status changes back to timing.
  }, [currentTime, status, currentTimer, hours, minutes, seconds]);

  return (
    <AppContext.Provider
      value={{
        status,
        setTimerStatus,
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        breakHours,
        setBreakHours,
        breakMinutes,
        setBreakMinutes,
        breakSeconds,
        setBreakSeconds,
        workoutStatus,
        setWorkoutStatus,
        formattedTime,
        setformattedTime,
        currentTime,
        setCurrentTime,
        onStartTiming,
        onStopTimer,
        workflowState,
        setWorkflowState,
        currentTimer,
        setCurrentTimer,
        shouldRender,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
