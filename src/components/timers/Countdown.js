import React, { useEffect, useState } from "react";
import AnchorButton from "../buttons/AnchorButton";
import { sys } from "../../utils/helpers";
import DigitalWatch from "../generic/DigitalWatch";
import TimerDisplay from "../generic/TimerDisplay";
import PauseDisplay from "../generic/PauseDisplay";
import { playAudio } from "../../audio/SoundEffect";

const Countdown = () => {
  // I declare values here which are relevent to the component.
  // Notice, hourse, minutes, and seconds also apear in this list,
  // with thier getters and setters.

  // This is because, it is easier to manage component states within the main
  // timer component, rather then at a top level. This is due to the fact that
  // when the global render state changes, all this values need to be reset.
  const [status, setTimerStatus] = useState("inactive");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [formatedTime, setFormatedTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatedTime = sys.onConvertToTime({
      hours,
      minutes,
      seconds,
    });
    setFormatedTime(formatedTime);
  }, [hours, minutes, seconds]);

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

  const onReachedGoal = () => {
    setTimerStatus("complete");
    playAudio({clip:"onClick"});
  }
  // Handle Stop Timer button onclick here.
  const onStopTimer = () => {
    setTimerStatus("inactive");
    setCurrentTime(0);
    playAudio({clip:"onClick"});
  };

  // Handle start timing button onclick here.
  const onStartTiming = () => {
    const timeInSeconds = sys.onConvertToSeconds({ hours, minutes, seconds });
    setTimerStatus("timing");
    setCurrentTime(timeInSeconds);
    playAudio({clip:"timing"});
  };

  // Manage what the user see's at any given state.
  // Useful way to reduce complexity associated with interfaces is to reduce actions
  // into managable steps.

  // Notice, each stage renders an independent component in itself, and passes setters down
  // to allow for easy update of state values.

  // Needed to simplify my approuch by breaking down my code into reusable componets.
  // Default state displays [nothing to tender.]
  const renderState = () => {
    switch (status) {
      case "inactive":
        return (
          <AnchorButton
            name="Start Now"
            onClick={() => setTimerStatus("active")}
          />
        );
      case "active":
        return (
          <DigitalWatch
            onSetHours={setHours}
            onSetMinutes={setMinutes}
            onSetSeconds={setSeconds}
            onStartTiming={onStartTiming}
            onCloseTimer={onStopTimer}
            onPauseTimer={() => setTimerStatus("paused")}
            currentValues={{ hours, minutes, seconds }}
            displayTime={formatedTime}
          />
        );
      case "paused":
        return (
          <PauseDisplay
            onCloseTimer={onStopTimer}
            onResumeTimer={() => setTimerStatus("timing")}
            displayTime={formatedTime}
          />
        );
      case "timing":
        return (
          <TimerDisplay
            onPauseTimer={() => setTimerStatus("paused")}
            formatedTime={formatedTime}
          />
        );
      case "complete":
        return (
          <TimerDisplay
            onPauseTimer={() => setTimerStatus("paused")}
            formatedTime={formatedTime}
          />
        );
      default:
        return <div>nothing to render</div>;
    }
  };

  // This is the actual render. Lets just return the title, and call on the
  // renderState method to give us an appropriate render based on the current state.
  return (
    <div className={"Default-Pink-Theme"}>
      <div className="Component-Title">Countdown</div>
      {renderState()}
    </div>
  );
};

export default Countdown;
