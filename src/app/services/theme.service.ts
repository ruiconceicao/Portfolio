import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme';
  private readonly html = inject(DOCUMENT).documentElement;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentTheme();
    }
  }

  toggleTheme(){
    return this.setTheme(this.currentTheme());
  }

  private currentTheme(): 'light' | 'dark' {
    let storedStorage = sessionStorage.getItem(this.themeKey);
    if (storedStorage !== 'light' && storedStorage !== 'dark') {
      sessionStorage.removeItem(this.themeKey);
      storedStorage = this.html.getAttribute('data-theme');
    }
    if (storedStorage !== 'light' && storedStorage !== 'dark') {
      this.html.removeAttribute('data-theme');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        storedStorage = 'dark';
      } else {
        storedStorage = 'light';
      }
    }
    return storedStorage as 'light' | 'dark';
  }

  private setTheme(theme: 'light' | 'dark') {
    const newTheme: string = theme === 'dark' ? 'light' : 'dark';
    this.html.setAttribute('data-theme', newTheme);
    return sessionStorage.setItem(this.themeKey, newTheme);
  }
}
