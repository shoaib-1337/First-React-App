import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Clone the counter object
    counters[index].value++; // Increment the value on the cloned object
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    // Now you can use counterId to filter the counters array and update the state if needed
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
