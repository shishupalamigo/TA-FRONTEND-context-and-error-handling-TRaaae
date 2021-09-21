import React, { useContext } from "react";
import ModeContext from "../ModeContext";

export default function SwitchButton() {
  let mode = useContext(ModeContext);
  let isDarkMode = mode.data.isDarkMode;
  let changeMode = mode.changeMode;
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
