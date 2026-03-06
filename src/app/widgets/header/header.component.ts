import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ThemeService } from '@app/core/theme.service';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HlmIconComponent, ButtonComponent, ...BrnSheetImports, ...HlmSheetImports],
  providers: [provideIcons({ lucideMenu, lucideMoon, lucideSun })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
