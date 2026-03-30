import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Вхідний параметр для кольору (аліас співпадає з селектором для зручності)
  @Input('appHighlight') highlightColor = '#f9f9f9';
  @Input() defaultColor = 'transparent';

  // Прив'язуємо властивості стилю до змінних
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.transform') transform: string = 'scale(1)';
  @HostBinding('style.boxShadow') boxShadow: string = 'none';
  @HostBinding('style.transition') transition: string = '0.3s ease-in-out';

  // Обробка наведення миші
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
    this.transform = 'scale(1.02)'; // Легке збільшення
    this.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; // Тінь
  }

  // Обробка відведення миші
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    this.transform = 'scale(1)';
    this.boxShadow = 'none';
  }
}