import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

export const APP_RENDER_STATES = {
  MENU: "Timer Menu",
  TABATA: "TABATA Timer",
  COUNTDOWN: "COUNTDOWN Timer",
  STOPWATCH: "STOPWATCH Timer",
  XY: "XY Timer",
};

let TIMER_REF = {
  RENDER_STATE: "COUNTDOWN Timer",
};

export const APP_TIMERS = [
  { title: "Time your training with a stop watch.", subTitle: "Let's get you started with a normal timed session. Time your workout and get feedback from the app in realtime.", C: <Stopwatch />, S:APP_RENDER_STATES.STOPWATCH },
  { title: "Set a timed goal, and track your progress.", subTitle: "Be proactive! Let's prepare your training session by setting timed goals.", C: <Countdown recId={1} />, S:APP_RENDER_STATES.COUNTDOWN },
  { title: "Goal driven session, with rounds.", subTitle: "Awesome, now let's take this a step further. Set timed goals with multiple rounds.", C: <XY />, S:APP_RENDER_STATES.XY },
  { title: "Now, we need to pace your training.", subTitle: "Take a training session with breaks across measurable intervals.", C: <Tabata />, S:APP_RENDER_STATES.TABATA },
];

export const shouldRender = ({ state }) => {
  return state === TIMER_REF.RENDER_STATE;
};

export const setTimerToDisplay = ({timer}) => {
  TIMER_REF.RENDER_STATE = APP_RENDER_STATES[timer] || APP_RENDER_STATES.COUNTDOWN;
}
