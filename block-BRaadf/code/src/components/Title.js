import { useContext } from "react";
import ModeContext from "../ModeContext";

function Title({ text }) {
  let mode = useContext(ModeContext);
  let isDarkMode = mode.data.isDarkMode;
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
