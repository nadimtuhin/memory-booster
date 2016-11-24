import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

class Start extends Component {
  static propTypes = {
    board: PropTypes.object
  };

  updateLevel = (e) => {
    this.props.board.level = Number(e.target.value);
  };

  render() {
    const { board } = this.props;

    return (
      <div>
        <div>
          <label>Level</label>
          <input type="number" value={board.level} onChange={this.updateLevel} />
        </div>
        <div>
          <Link activeClassName='btn' to="/memorize"> Start</Link>
        </div>
      </div>
    );
  }
}

export default observer(['board'])(Start);
