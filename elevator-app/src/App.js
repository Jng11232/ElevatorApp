import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import elevator from './image/transparentElevator2.png';
import building from './image/building Environment.png';
import './App.css';
var elevatorHeight = {
  bottom: '0px'
};
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: Date.now(),
      goUp: true,
      bottom: 0,
      elevatorTime: 0,
    };

    this.updateYElevator = this.updateYElevator.bind(this);
    this.gotoFirstFloor = this.gotoFirstFloor.bind(this);
    this.gotoSecondFloor = this.gotoSecondFloor.bind(this);
  }
  // <img src={elevator} className="App-logo" alt="logo" />
  updateYElevator(){
    this.setState({elevatorTime: this.state.elevatorTime + 1})
    if(this.state.elevatorTime < 600 && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom + 1});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime < 600 && this.state.bottom > -10 && this.state.goUp === false) {
      this.setState({bottom: this.state.bottom - 1});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      }
    };
    if(this.state.elevatorTime === 601) {
      clearInterval(this.myInterval);
    }
  };

  gotoSecondFloor(e){
    e.preventDefault();
    this.setState({elevatorTime: 0, goUp: true,})
    this.myInterval = setInterval(() => this.updateYElevator(), 10);
    // code to go to second floor
  }

  gotoFirstFloor(e){
    e.preventDefault();
    this.setState({elevatorTime: 0, goUp: false,})
    if(!(this.state.button === 0) ) {
      this.myInterval = setInterval(() => this.updateYElevator(), 10)
    };
    //code to go to first floor
  }


  render() {
    return (
      <div className="App">
      <Clock ></Clock>
      <br/>
        <div className="BuildingContainer">
          <img className="Building" src={building}/>
          <div className="ElevatorContainer">
            <img className="Elevator" style={elevatorHeight} src={elevator}/>
          </div>
        </div>
        <div className="Form">
          <button class="button" onClick={(e) => this.gotoSecondFloor(e)}> 2nd floor </button>
          <br/><br/>
          <button class="button" onClick={(e) => this.gotoFirstFloor(e)}> 1st floor </button>
        </div>
      </div>

    );
  }
}

export default App;
