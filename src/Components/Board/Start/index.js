import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

class Start extends Component {
  static propTypes = {
    board: PropTypes.object
  };

  updateWidth = (e) => {
    this.props.board.length = Number(e.target.value);
  };

  updateLevel = (e) => {
    this.props.board.level = Number(e.target.value);
  };

  render() {
    const { board } = this.props;

    return (
      <div>
        <div>
          <label>Width</label>
          <input type="text" value={board.length} onChange={this.updateWidth} />
        </div>
        <div>
          <label>Level</label>
          <input type="text" value={board.level} onChange={this.updateLevel} />
        </div>
        <div>
          <Link to="/memorize"> Start</Link>
        </div>
      </div>
    );
  }
}

export default observer(['board'])(Start);
