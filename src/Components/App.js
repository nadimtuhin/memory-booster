import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Booster</h1>

        <Link activeClassName="btn" to="/">Back</Link> <span> </span>
        <Link activeClassName="btn" to="/memorize">Reload</Link>

        <hr />

        { this.props.children }
      </div>
    );
  }
}

export default App;
