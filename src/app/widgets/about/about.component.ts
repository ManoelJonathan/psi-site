import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { lucideHeart, lucideMedal } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [provideIcons({ lucideHeart, lucideMedal })],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private sectionRef = viewChild<ElementRef>('aboutSection');
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
        { threshold: 0.1 }
      );

      observer.observe(section);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}