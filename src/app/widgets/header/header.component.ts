import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, Moon, Sun  } from 'lucide-angular';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ThemeService } from '@app/core/theme.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  
  readonly MenuIcon = Menu;
  readonly CloseIcon = X;
  readonly Moon = Moon;
  readonly Sun = Sun;

  toggleMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  themeService = inject(ThemeService)
}