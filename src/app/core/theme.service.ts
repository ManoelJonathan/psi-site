import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkmode = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.darkmode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    this.darkmode.update((v) => !v);
  }
}
