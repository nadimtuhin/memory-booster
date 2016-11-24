import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import { action } from 'mobx';
import Block from './Block';
import leftBlocks from './lib/leftBlocks';

export class Play extends Component {
  static propTypes = {
    blocks: PropTypes.object.isRequired,
    length: PropTypes.number.isRequired
  };

  state = {
    gameOver: false
  };

  @action
  handleSelectBlock = (index) => {
    const { blocks } = this.props;
    const block = blocks[index];
    block.selected = true;

    const left = leftBlocks(blocks).length;

    if (!left) {
      setTimeout(()=> {
        alert('you are awesome');
      }, 100);
    } else if (block.gem !== true) {
      this.setState({
        gameOver: true
      });
    }
  };

  renderBlock = (block, index) => {
    return <Block
      key={block.id}
      index={index}
      width={50}
      gem={block.gem}
      selected={block.selected}
      onClick={this.handleSelectBlock}
    />;
  };

  render() {
    const { blocks, length } = this.props;
    const { gameOver } = this.state;

    const l = length * 50;

    return (
      <div
        style={{ width: l, height: l }}
        className={classnames('Play', { gameOver })}
      >
        <div className="blocks">
          { blocks.map(this.renderBlock) }
        </div>

        { gameOver && <div className='gameOver__overlay'>
          Game Over
        </div> }
      </div>
    );
  }
}


export default inject(store => ({
  blocks: store.board.blocks,
  length: store.board.currentLevel.length
}))(observer(Play));
