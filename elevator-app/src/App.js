import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import building from './image/building Environment.png';
import Elevator from './ElevatorClass';

import OnePersonElevator from './ElevatorOne';
import TwoPersonElevator from './ElevatorTwo';
import ThreePersonElevator from './ElevatorThree';
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
      numOfPerson: 2

      // kp: 0.00,
      // ki: 0.00,
      // kd: 0.00,
      // m1: 100,
      // m2: 150,
      // m: 0,
      // K: 30000,
      // C: 30,
      // B: 60,
      // error: 0.0,
      // speed: 0.0,
    };

    this.updateYElevator = this.updateYElevator.bind(this);
    this.gotoFirstFloor = this.gotoFirstFloor.bind(this);
    this.gotoSecondFloor = this.gotoSecondFloor.bind(this);

    this.handleOnePerson = this.handleOnePerson.bind(this);
    this.handleTwoPerson = this.handleTwoPerson.bind(this);
    this.handleThreePerson = this.handleThreePerson.bind(this);
  }



  // theMathFunction1(s){
  //   ((0.01592*(Math.pow(s,3))+16.46(Math.pow(s,2))+(535.1 * s) + 86.2)/((Math.pow(s,5))+2.307*(Math)))
  // }
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

    handleOnePerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 1});
      return(   <OnePersonElevator />
      )
    }
    handleTwoPerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 2});
      return(   <TwoPersonElevator />
      )
    }
    handleThreePerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 3});
      return(   <ThreePersonElevator />
      )
    }

  render() {
    return (
      <div className="App">
      <Clock ></Clock>
      <br/>
        <div className="BuildingContainer">
          <img className="Building" src={building}/>
        </div>
        <div className="Form1">
          <button class="button" onClick={(e) => this.handleOnePerson(e)}> One big boy</button>
          <button class="button" onClick={(e) => this.handleTwoPerson(e)}> Two wonderful people </button>
          <button class="button" onClick={(e) => this.handleThreePerson(e)}> With a third wheel! </button>
        </div>
        <div className="Form2">


          <button class="button" onClick={(e) => this.gotoSecondFloor(e)}> 2nd floor </button>
          <br/><br/>
          <button class="button" onClick={(e) => this.gotoFirstFloor(e)}> 1st floor </button>
        </div>
      </div>

    );
  }
}

export default App;
