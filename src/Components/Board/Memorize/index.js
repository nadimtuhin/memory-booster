import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import queue from 'async/queue';
import Block from './Block';

export class Memorize extends Component {
  static propTypes = {
    gems: PropTypes.object.isRequired,
    blocks: PropTypes.object.isRequired,
    length: PropTypes.number.isRequired
  };

  state = {
    gems: []
  };

  componentDidMount() {
    const { gems } = this.props;

    /** add a gem after a center time */
    const q = queue((gem, done) => {
      this.setState({
        gems: [...this.state.gems, gem]
      }, () => setTimeout(done, 1000));
    }, 1);

    q.drain = (() => {
      this.props.router.push('/play');
    });

    gems.forEach(gem => q.push(gem));
  }

  renderBlock = (block, index) => {
    const { gems } = this.state;

    return <Block
      key={block.id}
      gem={gems.includes(index)}
      width={50}
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
    length: store.board.length,
    gems: store.board.gems
  })
})(observer(Memorize));
