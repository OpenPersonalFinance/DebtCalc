import { Component, Input } from 'angular2/core';

@Component({
    selector: 'opf-slider-interest',
    templateUrl: 'build/components/opf-slider-interest/opf-slider-interest.html'
})
export class opfSliderInterest {
    @Input() interest: number;
    @Input() title: string;
    @Input() step: number;
    @Input() min: number;
    @Input() max: number;
    constructor() { }

}

