import { Component, Input } from 'angular2/core';

@Component({
    selector: 'opf-slider-money',
    templateUrl: 'build/components/opf-slider-money/opf-slider-money.html'
})
export class opfSliderMoney {
    @Input() money: number;
    @Input() title: string;
    @Input() step: number;
    @Input() min: number;
    @Input() max: number;
    
    constructor() { 
        
    }
}