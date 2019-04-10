import React, { Component } from 'react';
import elevator3 from './image/transparentElevator3.png';
var elevatorHeight = {
  bottom: '0px'
};

class ElevatorThree extends Component {
  render() {
    return (
      <div className="ElevatorContainer">
        <img className="Elevator" style={elevatorHeight} src={elevator3}/>
      </div>
    );
  }
}
export default ElevatorThree;
