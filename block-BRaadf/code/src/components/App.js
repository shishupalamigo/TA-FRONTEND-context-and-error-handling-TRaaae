import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import ModeContext from "../ModeContext";


class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <ModeContext.Provider value={{data : this.state, changeMode: this.changeMode}}>
          <Header />
        <Main />
        <SwitchButton />
        </ModeContext.Provider>
      </div>
    );
  }
}

export default App;
