import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { ButtonComponent } from '@app/shared/ui/button/button.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private sectionRef = viewChild<ElementRef>('heroSection');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const section = this.sectionRef()?.nativeElement;
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('revealed');
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(section);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
