import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LinksService } from '../../services/links.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly linksService = inject(LinksService);
}
