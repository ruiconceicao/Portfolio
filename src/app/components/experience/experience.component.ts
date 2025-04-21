import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experienceService = inject(ExperienceService);
}
