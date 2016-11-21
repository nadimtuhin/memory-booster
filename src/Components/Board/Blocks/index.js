import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Block from './Block';
import classnames from 'classnames';

class Blocks extends Component {
  render() {
    return (
      <div
        style={{width: this.props.board.width*50}}
        className={classnames({playing: this.props.board.isPlaying})}
      >
        {this.props.board.boxes.map(block =>
          <Block key={block.id} block={block} />
        )}
      </div>
    );
  }
}

export default observer(['board'])(Blocks);
