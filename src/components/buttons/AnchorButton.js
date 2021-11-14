import React from "react";
import { APP_ICONS } from "../../context/settings"; 

const AnchorButton = ({className, onClick, theme, iconRef, name}) => {
  const IconRef = APP_ICONS[iconRef];
  return <button onClick={onClick} className={`Default-Anchor-Button ${className}`}>{IconRef || ""}{name}</button>;
}

export default AnchorButton;
