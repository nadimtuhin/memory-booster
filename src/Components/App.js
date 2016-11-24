import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

export class App extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="App">
        <h1>Memory Booster</h1>

        <Link activeClassName="btn" to="/">Back</Link> <span> </span>
        <Link activeClassName="btn" to="/memorize">Reload</Link> <span> </span>
        <span>Level: {this.props.level}</span>

        <hr />

        { this.props.children }
      </div>
    );
  }
}

export default inject((store) => ({
  level: store.board.level
}))(observer(App));
