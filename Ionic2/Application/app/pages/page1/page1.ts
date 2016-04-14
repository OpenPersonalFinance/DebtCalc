import {Page} from 'ionic-angular';
import {opfSliderMoney} from '../../components/opf-slider-money/opfSliderMoney';
import {opfSliderInterest} from '../../components/opf-slider-interest/opfSliderInterest';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [opfSliderMoney, opfSliderInterest]
})
export class Page1 {
  constructor() {

  }
}
