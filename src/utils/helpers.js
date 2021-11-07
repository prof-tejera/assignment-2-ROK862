// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// import { Helpers } from "react-scroll";

// everywhere.
const consoleStyle = (color) => `color:white; background: ${color}; font-weight: bold; padding:5px; border-radius:5px`;

// Helper Modules
module.exports.api = () => {};
module.exports.sys = () => {};
module.exports.db = () => {};
module.exports.ui = () => {};

// System Tools
module.exports.sys.warn = (message, caller = null) =>
  console.warn(
    `%c${JSON.stringify({ code: 201, message: message, caller: caller })}`,
    consoleStyle("orange")
  );
module.exports.sys.error = (message, caller = null) =>
  console.error(
    `%c${JSON.stringify({ code: 501, message: message, caller: caller })}`,
    consoleStyle("red")
  );
module.exports.sys.info = (message, caller = null) =>
  console.log(
    `%c${JSON.stringify({ code: 200, message: message, caller: caller })}`,
    consoleStyle("gray")
  );
module.exports.sys.debugClickEvent = (e) => {
  return { default: () => console.log("Action Button Called", e) }.default;
};

module.exports.sys.onConvertToSeconds = ({hours, minutes, seconds}) => parseInt((hours * 60) * 60) + parseInt(minutes * 60) + parseInt(seconds);

module.exports.sys.onConvertToTime = ({input, hours, minutes, seconds}) =>  {
  let dateTime = new Date(null);
  dateTime.setSeconds((input) ? input : module.exports.sys.onConvertToSeconds({hours, minutes, seconds})); // specify value of SECONDS
  return dateTime.toISOString().substr(11, 8);
}

// Helper Methods
module.exports.api.getJSON = ({ endpoint, options, callback }) => {
  const apiCall = new Promise((resolve, reject) => {
    const ops = options ? options : {};
    fetch(endpoint, ops).then((res) => {
      try {
        resolve(res.json());
      } catch (ex) {
        module.exports.sys.warn(
          `api call to [${endpoint}] has been rejected due to the following exception: ${ex}`,
          null
        );
        reject({ error: 201 });
      }
    });
    apiCall.then();
  });
};

