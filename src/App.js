// This file handles running the application 

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {                                           // IncrementItem function for skip count 
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });               // DecreaseItem function for skip count 
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });                     // shows the skip counter 
  }

  
  // skip count buttons for increment , decrement
  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increment by 1</button>         
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
