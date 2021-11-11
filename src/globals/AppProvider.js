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
  formatedTime: "",
  setFormatedTime: (val) => {},
  currentTime: "",
  setCurrentTime: (val) => {},
  setOnReachedGoal: () => {},
  onStartTiming: (val) => {},
  onStopTimer: (val) => {},
  workflowState: "Workout",
  setWorkflowState: (val) => {},
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
  const [formatedTime, setFormatedTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [workflowState, setWorkflowState] = useState(
    APP_RENDER_STATES.COUNTDOWN
  );
  const [currentTimer, setCurrentTimer] = useState("COUNTDOWN");

  useEffect(() => {
    const formatedTime = sys.onConvertToTime({
      hours,
      minutes,
      seconds,
    });
    setFormatedTime(formatedTime);
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
    const timeInSeconds = sys.onConvertToSeconds({ hours, minutes, seconds });
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
      const newTime = currentTime - 1.0;

      // Test if the timer has reached its goal.
      if (newTime < 0) {
        onReachedGoal();
        return;
      }

      // Set the display time, which is to be use for display in the digital watch display.
      const formatedTime = sys.onConvertToTime({ input: newTime });

      // Set state values for formated time, and new current time.
      setFormatedTime(formatedTime);
      setCurrentTime(newTime);
    }, 1000);

    return () => {
      // Lets clean up the timeout object to avoid memory leaking.
      clearTimeout(timeout);
    };
    // Monitor both the current time and status to alsp
    // allow trigger once the status changes back to timing.
  }, [currentTime, status]);

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
        formatedTime,
        setFormatedTime,
        currentTime,
        setCurrentTime,
        onStartTiming,
        onStopTimer,
        workflowState,
        setWorkflowState,
        setCurrentTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
