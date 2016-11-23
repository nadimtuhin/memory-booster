import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Booster</h1>
        <a href="/start">Restart</a>
        <hr />

        { this.props.children }
      </div>
    );
  }
}

export default App;
