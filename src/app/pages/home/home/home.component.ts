import { Component } from '@angular/core';
import { AboutComponent } from '@app/widgets/about/about.component';
import { HeroComponent } from '@app/widgets/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
