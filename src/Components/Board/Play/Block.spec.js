import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Block from './Block';
import noop from 'lodash/noop';

it('Play/Block renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Block width={50} gem={false} selected={false} index={1} onClick={noop} />
  ), div);
});

it('Play/Block matches snapshot selected true', () => {
  const component = renderer.create(
    <Block width={50} gem={false} selected={true} index={1} onClick={noop} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Play/Block matches snapshot selected false', () => {
  const component = renderer.create(
    <Block width={50} gem={false} selected={false} index={1} onClick={noop} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should use onClick on clicking the component', () => {
  function callback(index) {
    expect(index).toBe(1);
  }

  const component = renderer.create(
    <Block width={50} gem={false} selected={false} index={1}
           onClick={callback} />
  );

  let tree = component.toJSON();
  tree.props.onClick();
});
