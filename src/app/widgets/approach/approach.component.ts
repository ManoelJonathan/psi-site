import { Component } from '@angular/core';
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
  readonly cards = approachCards;
}
