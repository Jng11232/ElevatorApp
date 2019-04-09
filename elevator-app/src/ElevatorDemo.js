import React, {Component} from 'react';

class ElevatorDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kp: 0.00,
            ki: 0.00,
            kd: 0.00,
            m1: 100,
            m2: 150,
            m: 0,
            K: 30000,
            C: 30,
            B: 60,
            error: 0.0,
            speed: 0.0,
        }
    }

    setElevatorPosition(y, y2) {
        top: y+y2;
    }
}