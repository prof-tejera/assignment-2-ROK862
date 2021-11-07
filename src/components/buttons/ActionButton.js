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

const getOnClick = (input) => {
  if (input) return input;
  return ()=>console.log('Default button action.');
}

class ActionButton extends React.Component {

  render() {
    return <button className={getClassName(this.props.theme)} onClick={getOnClick(this.props.onClick)}>{getButtonTitle(this.props.name)}</button>;
  }
}

// className getButtonTitle

export default ActionButton;
