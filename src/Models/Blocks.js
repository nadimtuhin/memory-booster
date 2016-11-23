import { observable, action } from 'mobx';
import range from 'lodash/range';
import uniqueId from 'lodash/uniqueId';
import sampleSize from 'lodash/sampleSize';

export default class Blocks {
  @observable blocks = [];
  @observable gems = [];
  @observable length = 3;
  @observable level = 2;

  @action generate() {
    const blocks = range(this.length * this.length);

    this.gems = sampleSize(blocks, this.level);
  }

  @action draw() {
    const blocks = range(this.length * this.length);

    this.blocks = blocks.map(index => ({
      selected: false,
      id: uniqueId('box-'),
      gem: this.gems.includes(index),
    }));
  }
}
