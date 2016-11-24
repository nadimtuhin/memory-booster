import { observable, action, computed } from 'mobx';
import range from 'lodash/range';
import uniqueId from 'lodash/uniqueId';
import sampleSize from 'lodash/sampleSize';

export default class Blocks {
  @observable blocks = [];
  @observable gems = [];
  @observable level = 0;

  levels = [
    [3, 2], [3, 3], [3, 4],
    [4, 3], [4, 4], [4, 5], [4, 6],
    [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
    [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [6, 10],
    [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12],
    [8, 7], [8, 8], [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14]
  ];

  @computed get currentLevel() {
    const [length, level ] = this.levels[this.level];

    return {
      level, length
    }
  }

  generateBlocks() {
    const { length } = this.currentLevel;
    return range(length * length);
  }

  @action generate() {
    const blocks = this.generateBlocks();
    this.gems = sampleSize(blocks, this.currentLevel.length);
  }

  @action draw() {
    const blocks = this.generateBlocks();

    this.blocks = blocks.map(index => ({
      selected: false,
      id: uniqueId('box-'),
      gem: this.gems.includes(index),
    }));
  }
}
