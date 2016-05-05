import {Page} from 'ionic-angular';
import {Shared} from '../../shared'

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  value: number;
  pages: string[];
  myShared: Shared;
  constructor(shared: Shared) {
    this.myShared = shared;
    this.pages = ['Matt', 'Casanova'];
    this.value = 29.0003;

  }
}
