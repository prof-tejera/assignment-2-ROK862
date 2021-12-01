import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { APP_UI_KEYS, APP_ICON_KEYS } from "../../context/settings";
import AnchorButton from "../buttons/AnchorButton";

const AppUIStateToggle = () => {
  const { interfaceState, setInterfaceState } = useContext(AppContext);

  const renderSettings = () => {
    return (
      <div className="Default-Container">
        <AnchorButton
          name=""
          iconRef={APP_ICON_KEYS.BACK}
          className="Special Float-Right"
          onClick={() => setInterfaceState(APP_UI_KEYS.FLOW)}
        />
      </div>
    );
  };

  const renderFlow = () => {
    return (
      <div className="Default-Container">
        <AnchorButton
          name=""
          iconRef={APP_ICON_KEYS.SETTINGS}
          className="Float-Right"
          onClick={() => setInterfaceState(APP_UI_KEYS.SETTINGS)}
        />
      </div>
    );
  };

  return (
    <>
      {interfaceState === APP_UI_KEYS.SETTINGS
        ? renderSettings()
        : renderFlow()}
    </>
  );
};

export default AppUIStateToggle;