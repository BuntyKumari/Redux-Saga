import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {increaseAge, decreaseAge} from './store/action';


class App extends Component {
  render() {
    console.log("increasing age",this.props.age)
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(increaseAge(1)),
    onAgeDown: () => dispatch(decreaseAge(2))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(App);