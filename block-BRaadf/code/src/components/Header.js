import { useContext } from "react";
import ModeContext from "../ModeContext";

function Header() {
  let mode = useContext(ModeContext);
  let isDarkMode = mode.data.isDarkMode;
  console.log(mode, isDarkMode);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
