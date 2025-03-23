import {
  asNativeElements,
  Component,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { ThemeService } from '../../services/theme.service';
import { LinksService } from '../../services/links.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';
import { DevelopingWarningComponent } from '../developing-warning/developing-warning.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    RouterLink,
    RouterLinkActive,
    DevelopingWarningComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menuAnimation', [
      state(
        'hidden',
        style({ transform: 'translateY(-300%)', display: 'none' })
      ),
      state('visible', style({ transform: 'translateY(0)' })),
      transition('hidden => visible', animate('300ms ease')),
      transition('visible => hidden', animate('300ms ease-in')),
    ]),
  ],
})
export class HeaderComponent {
  readonly linksService = inject(LinksService);
  readonly themeService = inject(ThemeService);
  readonly router = inject(Router);
  readonly elementRef = inject(ElementRef);
  menuState: boolean = false;
  popupState: boolean = false;

  toggleMenu(): void {
    this.menuState = !this.menuState;
  }
  popupOnToggle(): void {
    this.popupState = true;
  }
  
  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  popupOffToggle(event: Event): void {
    if (
      this.popupState &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.popupState = false;
    }
  }

  menuHidden = `
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-menu">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
`;
  menuVisible = `
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
`;
}
