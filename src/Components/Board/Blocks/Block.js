import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';

class Block extends Component {
  handleClick = () => {
    if (!this.props.board.isPlaying) {
      return;
    }

    this.props.block.selected = true;
    if(!this.props.block.gem === true) {
      //do some error handling
    }
  };

  render() {
    return (
      <div onClick={this.handleClick} className={classnames('box', {
        gem: this.props.block.gem,
        selected: this.props.block.selected
      })}>

      </div>
    );
  }
}

export default observer(['board'])(Block);
