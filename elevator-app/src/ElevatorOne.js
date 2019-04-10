import React, { Component } from 'react';
import elevator from './image/transparentElevator.png';
var elevatorHeight = {
  bottom: '0px'
};

class ElevatorOne extends Component {


  render() {
    return (
      <div className="ElevatorContainer">
        <img className="Elevator" style={elevatorHeight} src={elevator}/>
      </div>
    );
  }
}
export default ElevatorOne;
