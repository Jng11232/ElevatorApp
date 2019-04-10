import React, { Component } from 'react';
import OnePersonElevator from './ElevatorOne';
import TwoPersonElevator from './ElevatorTwo';
import ThreePersonElevator from './ElevatorThree';
import './App.css';


class ElevatorClass extends Component {
  constructor(props){
    super(props);

    this.state = {
      numOfPerson: 2
    }
    this.handleOnePerson = this.handleOnePerson.bind(this);
    this.handleTwoPerson = this.handleTwoPerson.bind(this);
    this.handleThreePerson = this.handleThreePerson.bind(this);
  }


  handleOnePerson(e){
    e.preventDefault();
    this.setState({numOfPerson: 1});
  }
  handleTwoPerson(e){
    e.preventDefault();
    this.setState({numOfPerson: 2});
  }
  handleThreePerson(e){
    e.preventDefault();
    this.setState({numOfPerson: 3});
  }

render() {

    const numOfPerson = this.state.numOfPerson;
    if (numOfPerson === 1) {
      return (
        <div>
          <OnePersonElevator />
          <div className="Form1">
              <button class="button" onClick={(e) => this.handleTwoPerson(e)}> Two wonderful people </button>
              <button class="button" onClick={(e) => this.handleThreePerson(e)}> With a third wheel! </button>
        </div>
        <div>
      );
    }
    if (numOfPerson === 2) {
      return (
        <div>
        <TwoPersonElevator />
        <div className="Form1">
              <button class="button" onClick={(e) => this.handleOnePerson(e)}> One big boy</button>
              <button class="button" onClick={(e) => this.handleThreePerson(e)}> With a third wheel! </button>
        </div>
        </div>

      );
    }
    if (numOfPerson === 3) {
      return (
        <div>
        <ThreePersonElevator />
        <div className="Form1">
              <button class="button" onClick={(e) => this.handleOnePerson(e)}> One big boy</button>
              <button class="button" onClick={(e) => this.handleTwoPerson(e)}> Two wonderful people </button>
        </div>
        </div>

      );
    }

  }

}

export default ElevatorClass;
