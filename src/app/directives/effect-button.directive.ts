import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[effectButton]'
})
export class EffectButtonDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementStyleValue('box-shadow', '0 5px 9px 1px rgba(130, 19, 40, 0.5)');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementStyleValue('box-shadow', 'none');
  }

  ngOnInit() {
    this.changeElementStyleValue('background-image', 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)');
    this.changeElementStyleValue('box-shadow', 'none');
  }

  changeElementStyleValue(style: string, value: string) {
    this.renderer.setStyle(this.el.nativeElement, style, value);
  }
}
