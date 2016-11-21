import BlocksBoard from './Blocks';

it('should generate random gems', () => {
  const board = new BlocksBoard();
  board.generate();

  expect(board.gems.length).toEqual(2);
});

it('should create boxes', () => {
  const board = new BlocksBoard();
  board.gems = [1,2,4];
  board.width = 4;
  board.level = 3;

  board.draw();
  expect(board.boxes[1].gem).toEqual(true);
  expect(board.boxes[2].gem).toEqual(true);
  expect(board.boxes[4].gem).toEqual(true);
});
