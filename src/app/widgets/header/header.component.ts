import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ThemeService } from '@app/core/theme.service';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideMenu, lucideX, lucideMoon, lucideSun } from '@ng-icons/lucide';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HlmIconComponent, ButtonComponent],
  providers: [provideIcons({ lucideMenu, lucideX, lucideMoon, lucideSun })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  toggleMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  themeService = inject(ThemeService);
}
