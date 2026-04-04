import { afterNextRender, Directive, ElementRef, inject, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnDestroy {
  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  @Input() threshold = 0.15;
  @Input() revealClass = 'revealed';

  constructor() {
    afterNextRender(() => {
      this.initObserver();
    });
  }

  private initObserver() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add(this.revealClass);
          this.observer?.disconnect();
        }
      },
      { threshold: this.threshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
