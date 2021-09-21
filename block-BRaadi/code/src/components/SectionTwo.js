import React from 'react';

class SectionTwo extends React.Component {
  state = {
    error: false,
  };
  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('An error occured!');
    }
    return (
      <div className="box s1-c">
        <h2>Throw Error</h2>
        <p className="small">
          Clicking this button will call a function. Inside that function an
          error is thrown. That will make the component gets unmounted. Fix it
          using error boundary. Make this component display `An error occured!`
        </p>
        <button className="error" onClick={this.handleClick}>
          Click to Throw an Error
        </button>
      </div>
    );
  }
}

export default SectionTwo;
