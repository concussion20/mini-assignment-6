import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component {
  add() {
    let value = Math.floor(Math.random() * 6) + 1;  
    this.props.dispatch({type: "ADD", value: value})
  }

  clear() {
    this.props.dispatch({type: "RESET"})
  }

  render() {
      return (
          <div>
              <button onClick={() => this.add()}>Roll Dice</button>
              <button onClick={() => this.clear()}>Clear Dice</button>
              <h4>Sum: {this.props.count} </h4>
              <div id="dices">
                {this.props.diceLst.map(diceVal => (
                  <Dice value={diceVal}/>
                ))}
              </div>
          </div>
      );
  }
}

class Dice extends React.Component {
  render() {
    return (
        <div className="dice">
          {this.props.value}
        </div>
    );
  }
}

let mapDispatchToProps = function(dispatch, ownProps) {
  return {
      dispatch: dispatch
  };
}

let mapStateToProps = function(state, ownProps) {
  return state;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
