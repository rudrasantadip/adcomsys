import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective {

  constructor(private el: ElementRef) { }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const isVisible = elementPosition < windowHeight;
    if (isVisible) {
      this.el.nativeElement.classList.add('animated'); // Add your animation class
    } else {
      this.el.nativeElement.classList.remove('animated'); // Remove animation class when element is not visible
    }
  }

}
