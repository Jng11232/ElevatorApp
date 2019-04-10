import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import building from './image/building Environment.png';
import Elevator from './ElevatorClass';
import elevator2 from './image/transparentElevator2.png';

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

    this.updateYElevator1 = this.updateYElevator1.bind(this);
    this.updateYElevator2 = this.updateYElevator2.bind(this);
    this.updateYElevator3 = this.updateYElevator3.bind(this);
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
  updateYElevator1(){
    this.setState({elevatorTime: this.state.elevatorTime + 1})
    if(this.state.elevatorTime < 301 && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom +((0.16)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100))});
      console.log(((0.16)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100)))
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime > 299 && this.state.elevatorTime < 401 && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom +(this.state.elevatorTime/100) - 1.850});
    console.log((this.state.elevatorTime/100) - 1.850 + "part 2" + this.state.elevatorTime)
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime > 399 && this.state.elevatorTime < 701   && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom +((-0.16)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100))+8.025});
    console.log(((-0.43)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100))+8.025)
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime < 301 && this.state.bottom < 510 && this.state.goUp === false) {
    this.setState({bottom: this.state.bottom -((1/6)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100))});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime > 299 && this.state.elevatorTime < 401 && this.state.bottom < 510 && this.state.goUp === false) {
    this.setState({bottom: this.state.bottom -(this.state.elevatorTime/100) + 1.875});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime > 399 && this.state.elevatorTime < 701  && this.state.elevatorTime < 400  && this.state.bottom < 510 && this.state.goUp === false) {
    this.setState({bottom: this.state.bottom -((-1/6)*(this.state.elevatorTime/100)*(this.state.elevatorTime/100))-3.125});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };


    if(this.state.elevatorTime === 702) {
      clearInterval(this.myInterval);
    }
  };
  updateYElevator2(){
    this.setState({elevatorTime: this.state.elevatorTime + 1})
    if(this.state.elevatorTime < 850 && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom + 0.58});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime < 850 && this.state.bottom > -10 && this.state.goUp === false) {
      this.setState({bottom: this.state.bottom - 0.58});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      }
    };
    if(this.state.elevatorTime === 860) {
      clearInterval(this.myInterval);
    }
  };
  updateYElevator3(){
    this.setState({elevatorTime: this.state.elevatorTime + 1})
    if(this.state.elevatorTime < 1400 && this.state.bottom < 510 && this.state.goUp === true) {
    this.setState({bottom: this.state.bottom + 0.36});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      };
    };
    if(this.state.elevatorTime < 1400 && this.state.bottom > -10 && this.state.goUp === false) {
      this.setState({bottom: this.state.bottom - 0.36});
      var theHeight = this.state.bottom;
      elevatorHeight = {
        bottom: theHeight+'px'
      }
    };
    if(this.state.elevatorTime === 1500) {
      clearInterval(this.myInterval);
    }
  };

  gotoSecondFloor(e){
    e.preventDefault();
    this.setState({elevatorTime: 0, goUp: true,})
    if(this.state.numOfPerson === 1 ){
      console.log(this.state.numOfPerson)
      this.myInterval = setInterval(() => this.updateYElevator1(), 10);
    }
    if(this.state.numOfPerson === 2 ){
      this.myInterval = setInterval(() => this.updateYElevator2(), 10);
    }
    if(this.state.numOfPerson === 3){
      this.myInterval = setInterval(() => this.updateYElevator3(), 10);
    }
    // code to go to second floor
  }

  gotoFirstFloor(e){
    e.preventDefault();
    this.setState({elevatorTime: 0, goUp: false,})
    if(!(this.state.bottom === 0) ) {
      if(this.state.numOfPerson ===1 ){
         this.myInterval = setInterval(() => this.updateYElevator1(), 10)
      }
      if(this.state.numOfPerson ===2 ){
          this.myInterval = setInterval(() => this.updateYElevator2(), 10)
      }
      if(this.state.numOfPerson ===3 ){
           this.myInterval = setInterval(() => this.updateYElevator3(), 10)
      }
    };
    //code to go to first floor
  }

    handleOnePerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 1});
      console.log(this.state.numOfPerson)

      return(   <OnePersonElevator />
      )
    }
    handleTwoPerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 2});
      console.log(this.state.numOfPerson)

      return(   <TwoPersonElevator />
      )
    }
    handleThreePerson(e){
      e.preventDefault();
      this.setState({numOfPerson: 3});
      console.log(this.state.numOfPerson)

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
            <img className="Elevator" style={elevatorHeight} src={elevator2}/>
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
