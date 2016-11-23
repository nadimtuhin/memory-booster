import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Block from './Block';

it('Memorize/Block renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block gem={true} width={50} />, div);
});

it('Memorize/Block matches snapshot gem true', () => {
  const component = renderer.create(
    <Block gem={true} width={50} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Memorize/Block matches snapshot gem false', () => {
  const component = renderer.create(
    <Block gem={false} width={50} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
