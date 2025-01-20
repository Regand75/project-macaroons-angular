import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[effectButton]'
})
export class EffectButtonDirective {

  constructor(el: ElementRef) {
    console.log(el);
  }

}
