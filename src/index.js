import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: "",
      hi: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      // Function callback
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      //   return <div>Latitude: {this.state.lat}</div>;
      // Passing state as props
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
