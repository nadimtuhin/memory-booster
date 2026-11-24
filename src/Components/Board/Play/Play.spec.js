import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { Play } from '../Play';
import mobx from 'mobx';

const router = {
  push() {

  }
};

it('Play renders without crashing', () => {
  const div = document.createElement('div');
  const gems = mobx.observable([]);
  const blocks = mobx.observable([
    { id: 0, gem: false, selected: false },
    { id: 1, gem: true, selected: false },
  ]);

  ReactDOM.render((
    <Play
      router={router}
      gems={gems}
      blocks={blocks}
      length={3}
    />
  ), div);
});

it('Play/Block ', () => {
  const gems = mobx.observable([1,2,3]);
  const blocks = mobx.observable([
    { id: 0, gem: false, selected: false },
    { id: 1, gem: true, selected: false },
    { id: 2, gem: true, selected: false },
    { id: 3, gem: true, selected: false },
    { id: 4, gem: false, selected: false }
  ]);

  const component = renderer.create(
    <Play gems={gems} blocks={blocks} length={3} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].children[0].props.onClick();
  tree = component.toJSON();

  expect(tree.children[0].children[0].props.className.includes('selected')).toBe(true);
});

it('Play ignores clicks once the level is won', () => {
  jest.useFakeTimers();
  const increaseLevel = jest.fn();
  const blocks = mobx.observable([
    { id: 0, gem: true, selected: false },
    { id: 1, gem: false, selected: false },
  ]);

  const component = renderer.create(
    <Play blocks={blocks} length={2} increaseLevel={increaseLevel} />
  );

  const tree = component.toJSON();
  tree.children[0].children[0].props.onClick();
  tree.children[0].children[1].props.onClick();

  expect(increaseLevel.mock.calls.length).toEqual(1);
  expect(blocks[1].selected).toBe(false);
});
