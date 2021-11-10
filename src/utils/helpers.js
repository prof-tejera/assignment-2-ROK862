// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// import { Helpers } from "react-scroll";

// Create a module i will be using as a handle. Sys seem's short and sexy.
module.exports.sys = () => {};

// Convert time to seconds. Single liner. Hmm. I'm learning.
module.exports.sys.onConvertToSeconds = ({hours, minutes, seconds}) => parseInt((hours * 60) * 60) + parseInt(minutes * 60) + parseInt(seconds);

// Convert to time string. If we reveive an input, which is already in seconds, there should be no need to do additional calculations.
module.exports.sys.onConvertToTime = ({input, hours, minutes, seconds}) =>  {
  let dateTime = new Date(null);
  dateTime.setSeconds((input) ? input : module.exports.sys.onConvertToSeconds({hours, minutes, seconds})); // specify value of SECONDS
  return dateTime.toISOString().substr(11, 8);
}

// Helper Methods

