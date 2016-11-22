import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import queue from 'async/queue';

const Block = ({ gem, width }) =>
  <div className={classnames('block', { gem })} style={{ width }} />;

class Memorize extends Component {
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
      browserHistory.push('/play');
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
