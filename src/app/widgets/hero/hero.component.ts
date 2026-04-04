import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ScrollRevealDirective } from '@app/shared/ui/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
