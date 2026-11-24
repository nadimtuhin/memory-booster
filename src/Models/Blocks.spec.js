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

it('should stay on the last level after finishing it', () => {
  const board = new BlocksBoard();
  const lastLevel = board.levels.length - 1;
  board.level = lastLevel;

  board.increaseLevel();

  expect(board.level).toEqual(lastLevel);
  expect(board.currentLevel).toEqual({ length: 8, gems: 12 });
});

it('should fall back to a valid level when level is out of range', () => {
  const board = new BlocksBoard();

  board.level = 99;
  expect(board.currentLevel).toEqual({ length: 8, gems: 12 });

  board.level = -1;
  expect(board.currentLevel).toEqual({ length: 3, gems: 2 });

  board.level = NaN;
  expect(board.currentLevel).toEqual({ length: 3, gems: 2 });
});
