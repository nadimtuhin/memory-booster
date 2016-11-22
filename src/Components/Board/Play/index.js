import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

import Block from './Block';

class Play extends Component {
  static propTypes = {
    blocks: PropTypes.object.isRequired,
    length: PropTypes.number.isRequired
  };

  @action
  handleSelectBlock = (index) => {
    const block = this.props.blocks[index];
    block.selected = true;
  };

  renderBlock = (block, index) => {
    const { length } = this.props;
    console.log(block.selected);

    return <Block
      key={block.id}
      index={index}
      width={length}
      selected={block.selected}
      onClick={this.handleSelectBlock}
    />;
  };

  render() {
    const { blocks, length } = this.props;

    return (
      <div style={{ width: length * 50 }}>
        { blocks.map(this.renderBlock) }
      </div>
    );
  }
}
export default inject(store => {
  store.board.generate();
  store.board.draw();

  return ({
    blocks: store.board.blocks,
    length: store.board.length
  })
})(observer(Play));
