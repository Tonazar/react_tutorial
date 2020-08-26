import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: "",
  //   };

  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Function callback
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //HELPER FUNCTION
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      //   return <div>Latitude: {this.state.lat}</div>;
      // Passing state as props
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please allow the request" />;
  }

  render() {
    return <div className="borderRed">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
