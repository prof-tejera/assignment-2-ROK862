import React from "react";

const getButtonTitle = (input) => {
    if (input) return input;
    return 'Untitled';
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
