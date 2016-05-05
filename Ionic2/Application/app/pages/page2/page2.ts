import {Page} from 'ionic-angular';
import {Shared} from '../../shared'

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  title: string;
  myShared: Shared;
  constructor(shared: Shared) {
    this.title = shared.name;
    this.myShared = shared;
  }
  
  onButtonClick(){
    this.title = "Button Was Clicked";
    this.myShared.name = this.title;
  }
}
