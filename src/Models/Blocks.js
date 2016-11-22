import { observable, action } from 'mobx';
import range from 'lodash/range';
import uniqueId from 'lodash/uniqueId';
import sampleSize from 'lodash/sampleSize';

export default class Blocks {
  @observable blocks = [];
  @observable gems = [];
  @observable length = 3;
  @observable level = 2;

  @action draw() {
    this.blocks.forEach(index => ({
      selected: false,
      id: uniqueId('box-'),
      gem: this.gems.includes(index),
    }));
  }

  @action generate() {
    const blocks = range(this.length * this.length);

    this.gems = sampleSize(blocks, this.level);
    this.blocks = blocks.map(index => ({
      id: uniqueId('box-')
    }));
  }
}
