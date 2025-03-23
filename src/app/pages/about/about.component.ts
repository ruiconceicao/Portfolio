import { Component } from '@angular/core';
import { LinkedinCardComponent } from '../../components/linkedin-card/linkedin-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LinkedinCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
