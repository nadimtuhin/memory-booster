import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export class Block extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    gem: PropTypes.bool.isRequired,
  };

  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    const { selected, width, gem } = this.props;
    const classes = classnames('block', { gem, selected });

    return (
      <div style={{ width }} onClick={this.handleClick} className={classes} />
    );
  }
}

export default Block;
