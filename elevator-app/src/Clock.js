import React from 'react';

let time = new Date().toLocaleString();
var divStyle = {
  color: 'white'
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 250);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock" style={divStyle}>
        The time is {this.state.time}.
      </p>
    );
  }
}

export default Clock;
