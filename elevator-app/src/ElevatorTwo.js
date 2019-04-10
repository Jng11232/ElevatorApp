import React, { Component } from 'react';
import elevator2 from './image/transparentElevator2.png';
var elevatorHeight = {
  bottom: '0px'
};

class ElevatorTwo extends Component {
  render() {
    return (
      <div className="ElevatorContainer">
        <img className="Elevator" style={elevatorHeight} src={elevator2}/>
      </div>
    );
  }
}
export default ElevatorTwo;
