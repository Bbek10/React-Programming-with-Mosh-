import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>{" "}
            {/*Children between opening and closing tag*/}
          </Counter>
        ))}
      </div>
    );
  }
}
