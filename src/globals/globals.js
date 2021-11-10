export const APP_RENDER_STATES = {
  MENU: "Timer Menu",
  TABATA: "TABATA Timer",
  COUNTDOWN: "COUNTDOWN Timer",
  STOPWATCH: "STOPWATCH Timer",
  XY: "XY Timer",
};

const TIMER_REF = {
  RENDER_STATE: "COUNTDOWN Timer",
};

export const shouldRender = ({ state }) => {
  return state === TIMER_REF.RENDER_STATE;
};
