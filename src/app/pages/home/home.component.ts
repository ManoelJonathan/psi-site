import { Component } from '@angular/core';
import { AboutComponent } from '@app/widgets/about/about.component';
import { ApproachComponent } from '@app/widgets/approach/approach.component';
import { FooterComponent } from '@app/widgets/footer/footer.component';
import { HeroComponent } from '@app/widgets/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ApproachComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
