import React from 'react';
import classnames from 'classnames';

const Block = ({ gem, width }) =>
  <div className={classnames('block', { gem })} style={{ width }} />;

export default Block;
