import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    //State local i.e. invisible to other components
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App-Constructor", this.props);
  }

  handleIncrement = (counter) => {
    const counterNew = [...this.state.counters];
    const index = counterNew.indexOf(counter);
    counterNew[index] = { ...counter };
    counterNew[index].value++;

    this.setState({ counters: counterNew });
  };
  handleDecrement = (counter) => {
    const counterNew = [...this.state.counters];
    const index = counterNew.indexOf(counter);
    counterNew[index] = { ...counter };

    counterNew[index].value--;

    this.setState({ counters: counterNew });
  };
  handleDelete = (counterId) => {
    const counterNew = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counterNew });
  };

  handleReset = () => {
    const counterNew = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: counterNew });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
