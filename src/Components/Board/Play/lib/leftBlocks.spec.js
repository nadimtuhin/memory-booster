import leftBlocks from './leftBlocks';

it('should return leftover blocsk', () => {
  const blocks = ([
    { id: 0, gem: false, selected: false },
    { id: 1, gem: true, selected: true },
    { id: 2, gem: true, selected: false },
    { id: 3, gem: true, selected: false },
    { id: 4, gem: false, selected: false }
  ]);

  expect(leftBlocks(blocks).length).toEqual(2);
});
