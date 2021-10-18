import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked
  number = 1;

  @action
  addNumber() {
    this.number += 1;
  }
}
