import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { observer } from 'mobx-react';

class Start extends Component {
  static propTypes = {
    board: PropTypes.object
  };

  updateWidth = (e) => {
    this.props.board.length = parseInt(e.target.value, 10);
  };

  updateLevel = (e) => {
    this.props.board.level = parseInt(e.target.value, 10);
  };

  handleStart = () => {
    this.props.board.generate();
    this.props.board.draw();

    browserHistory.push('/memorize');
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
          <button type="button" onClick={this.handleStart}> Start</button>
        </div>
      </div>
    );
  }
}

export default observer(['board'])(Start);
