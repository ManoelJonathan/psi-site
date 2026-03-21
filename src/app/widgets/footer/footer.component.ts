import { Component } from '@angular/core';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideInstagram, lucideMail, lucideMapPin, lucidePhone } from '@ng-icons/lucide';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [provideIcons({ lucideInstagram, lucideMail, lucideMapPin, lucidePhone })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
