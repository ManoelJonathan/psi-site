import { Component } from '@angular/core';
import { lucideHeart } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HlmIconComponent,],
  providers:[provideIcons({lucideHeart})],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}