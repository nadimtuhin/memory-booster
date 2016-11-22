import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Block extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  };

  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    const { selected, width } = this.props;
    const classes = classnames('box', { selected });

    return (
      <div style={{ width }} onClick={this.handleClick} className={classes} />
    );
  }
}

export default Block;
