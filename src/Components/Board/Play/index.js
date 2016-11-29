import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import { action } from 'mobx';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';
import Block from './Block';
import leftBlocks from './lib/leftBlocks';

export class Play extends Component {
  static propTypes = {
    blocks: PropTypes.object.isRequired,
    length: PropTypes.number.isRequired
  };

  state = {
    gameOver: false,
    success: false
  };

  @action
  handleSelectBlock = (index) => {
    const { blocks, increaseLevel } = this.props;
    const block = blocks[index];
    block.selected = true;

    const left = leftBlocks(blocks).length;

    if (!left) {
      increaseLevel();
      setTimeout(() => {
        findDOMNode(this.refs['memorizeBtn']).click();
      }, 1000);
      this.setState({ success: true });
    } else if (block.gem !== true) {
      this.setState({ gameOver: true });
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
    const { gameOver, success } = this.state;

    const l = length * 50;

    return (
      <div
        style={{ width: l, height: l, margin: '0 auto' }}
        className={classnames('Play', { gameOver })}
      >
        <div className="blocks">
          { blocks.map(this.renderBlock) }
        </div>

        {
          !gameOver && !success && <div>
            <center>Play</center>
          </div>
        }

        { gameOver && <div className='gameOver__overlay'>
          <div>
            Game Over <Link to="/memorize">Retry</Link>
          </div>
        </div> }

        { success && <div className='success__overlay'>
          <div>
            You are awesome <Link ref="memorizeBtn" to="/memorize">Next
            Level</Link>
          </div>
        </div> }
      </div>
    );
  }
}


export default inject(store => ({
  increaseLevel: store.board.increaseLevel.bind(store.board),
  length: store.board.currentLevel.length,
  blocks: store.board.blocks,
}))(observer(Play));
