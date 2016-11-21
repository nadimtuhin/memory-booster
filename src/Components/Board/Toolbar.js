import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

class Settings extends Component {
  static propTypes = {
    board: React.PropTypes.object
  };

  updateWidth = (e) => {
    this.props.board.width = e.target.value;
  };

  updateLevel = (e) => {
    this.props.board.level = e.target.value;
  };

  handleStart = () => {
    this.props.board.generate();
    this.props.board.draw();
    this.props.board.shouldMemorize = true;

    setTimeout(() => {
      this.props.board.shouldMemorize = false;
      this.props.board.isPlaying = true;
    }, 2000);
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="">Width</label>
          <input
            type="text"
            value={this.props.board.width}
            onChange={this.updateWidth}
          />
        </div>
        <div>
          <label htmlFor="">Level</label>
          <input
            type="text"
            value={this.props.board.level}
            onChange={this.updateLevel}
          />
        </div>
        <div>
          <button type="button" onClick={this.handleStart}>Start</button>
        </div>

        <div className={classnames('hidden', {
          visible: this.props.board.shouldMemorize
        })}>
          hurry memorize
        </div>
      </div>
    );
  }
}

export default observer(['board'])(Settings);
