import React, { Component } from 'react';
import logo from './logo.svg';
import elevator from './image/transparentElevator2.png';
import building from './image/building Environment.png';
import './App.css';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     time: Date.now(),
  //     bottom: 0,
  //   };
  // }
  // <img src={elevator} className="App-logo" alt="logo" />
  // updateYElevator(){
  //   for(var i = 0; i < 500; i++){
  //     this.setState(bottom: i);
  //   }
  // };

  render() {
    return (
      <div className="App">
        <div className="BuildingContainer">
          <img className="Building" src={building}/>
          <div className="ElevatorContainer">
            <img className="Elevator" src={elevator}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
