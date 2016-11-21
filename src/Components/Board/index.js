import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Blocks from './Blocks';

class Board extends Component {
  render() {
    return (
      <div>
        <Toolbar />

        <Blocks />
      </div>
    );
  }
}

export default Board;
