import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { lucideBrain, lucideHeart, lucideLightbulb, lucideMessageCircle } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { approachCards } from './model/approach-cards.data';

@Component({
  selector: 'app-approach',
  imports: [HlmIconComponent],
  providers: [provideIcons({ lucideBrain, lucideLightbulb, lucideHeart, lucideMessageCircle })],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.css'
})
export class ApproachComponent {
  private sectionRef = viewChild<ElementRef>('approachSection');
  private destroyRef = inject(DestroyRef);
  
  readonly cards = approachCards;

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
        { threshold: 0.1 }
      );

      observer.observe(section);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
