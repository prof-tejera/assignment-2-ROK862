// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// import { Helpers } from "react-scroll";

// _________________________________________________________________ //
// These changes are to comply with the course requirements.
// - Change all ES5 code to ES6.

const hex = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Create a module i will be using as a handle. Sys seem's short and sexy.

// Convert time to seconds. Single liner. Hmm. I'm learning.
export const _timeToSeconds = ({hours, minutes, seconds}) => parseInt((hours * 60) * 60) + parseInt(minutes * 60) + parseInt(seconds);

// Convert to time string. If we reveive an input, which is already in seconds, there should be no need to do additional calculations.
export const _timeToDisplay = ({input, hours, minutes, seconds}) =>  {
  let dateTime = new Date(null);
  dateTime.setSeconds(input || _timeToSeconds({hours, minutes, seconds})); // specify value of SECONDS
  let timeVal = "";
  try{
    timeVal = dateTime.toISOString().substr(11, 8);
  } catch (ex) {
    timeVal = "00:00:00";
  }
  return timeVal;
}

// Please advice if there is a better way to deal with unique keys in react.
export const _getKey = (len=15) => {
  let output = '';
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

// Helper Methods

