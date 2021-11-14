import React from "react";
import Helper from "../../utils/helpers";

const getButtonTitle = (input) => {
    if (input) return input;
    Helper.sys.info(`Hmm, you are missing a title on a button.`);
    return 'Untitled :)';
}

const getClassName = (input) => {
  if (input) return input;
  return 'Default-Action-Button';
}

const defaultButtonAction = (input) => {
  return ()=>console.log('Default button action.');
}

const ActionButton = ({theme, onClick, name}) => {
  return <button className={getClassName(theme)} onClick={onClick || defaultButtonAction}>{getButtonTitle(name)}</button>;
}

export default ActionButton;
