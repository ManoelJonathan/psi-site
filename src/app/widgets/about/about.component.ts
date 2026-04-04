import { Component } from '@angular/core';
import { lucideHeart, lucideMedal } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { aboutHighlights } from '@app/entities/psychologist/model/about-highlights.data';
import { ScrollRevealDirective } from '@app/shared/ui/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HlmIconComponent, ScrollRevealDirective],
  providers: [provideIcons({ lucideHeart, lucideMedal })],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  protected highlights = aboutHighlights;
}
