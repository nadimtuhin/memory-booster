import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { Memorize } from '../Memorize';
import mobx from 'mobx';

const gems = mobx.observable([1, 2, 3]);
const blocks = mobx.observable([
  { id: 0, gem: false, selected: false },
  { id: 1, gem: true, selected: false },
  { id: 2, gem: true, selected: false },
  { id: 3, gem: true, selected: false },
  { id: 4, gem: false, selected: false }
]);

const router = {
  push() {

  }
};

it('Memorize renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render((
    <Memorize
      router={router}
      gems={gems}
      blocks={blocks}
      length={3}
    />
  ), div);
});

it('Memorize/Block matches snapshot gem true', () => {
  const component = renderer.create(
    <Memorize
      router={router}
      gems={gems}
      blocks={blocks}
      length={3}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
