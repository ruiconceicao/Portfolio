import { Component } from '@angular/core';
import { LinkedinCardComponent } from '../../components/linkedin-card/linkedin-card.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LinkedinCardComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
