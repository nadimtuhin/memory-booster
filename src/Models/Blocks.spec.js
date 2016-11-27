import BlocksBoard from './Blocks';

it('should generate random gems', () => {
  const board = new BlocksBoard();
  board.level = 0;
  board.generate();

  expect(board.gems.length).toEqual(2);
});

it('should create blocks', () => {
  const board = new BlocksBoard();

  board.gems = [1,2,4];
  board.draw();

  expect(board.blocks[1].gem).toEqual(true);
  expect(board.blocks[2].gem).toEqual(true);
  expect(board.blocks[4].gem).toEqual(true);
});
