export default function leftBlocks(blocks) {
  return blocks
    .filter(block => block.gem)
    .filter(block => !block.selected);
};
