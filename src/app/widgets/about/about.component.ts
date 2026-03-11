import { Component } from '@angular/core';
import { lucideHeart,lucideMedal} from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HlmIconComponent,],
  providers:[provideIcons({lucideHeart,lucideMedal})],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}