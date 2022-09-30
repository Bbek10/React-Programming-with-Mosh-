import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  render() {
    console.log(this.props.counter.value);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*classes form bootstrap*/}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-5"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //dynamic class rendering
  getBadgeClasses() {
    let classes = "badge m-2 my-4 mx-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  //if count is 0 and more than 0
  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}
//export normal rcc also this also
export default Counter;
