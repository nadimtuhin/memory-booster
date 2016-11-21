import { observable, action } from 'mobx';
import range from 'lodash/range';
import sampleSize from 'lodash/sampleSize';
import uniqueId from 'lodash/uniqueId';

export default class Blocks {
  @observable boxes = [];
  @observable gems = [];
  @observable width = 3;
  @observable level = 2;
  @observable isPlaying = false;
  @observable shouldMemorize = false;

  @action draw() {
      this.boxes = range(this.width*this.width).map(ii => ({
        gem: this.gems.includes(ii),
        id: uniqueId('box-'),
        selected: false
      }));
  }

  @action generate() {
    this.gems = sampleSize(range(this.width*this.width), this.level);
  }
}
