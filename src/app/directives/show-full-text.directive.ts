import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[showFullText]',
})
export class ShowFullTextDirective implements AfterViewInit{
  @Input('showFullText') fullText: string = ''; // Полный текст

  private shortenedText: string = ''; // Сокращенный текст

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Инициализация после полной отрисовки компонента
  ngAfterViewInit() {
    this.shortenedText = this.el.nativeElement.innerText.trim(); // Сохраняем сокращенный текст
  }

  // Событие при наведении
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.fullText); // Показываем полный текст
  }

  // Событие при уходе курсора
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.shortenedText); // Возвращаем сокращенный текст
  }
}
