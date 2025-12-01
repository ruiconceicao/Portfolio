import { Injectable, signal } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experiences = signal<Experience[]>([
    {
      position: 'Full Stack Development and IT Support',
      contractType: 'Internship',
      company: 'Sindicato da Banca, Seguros e Tecnologias',
      workPlace: 'On-site',
      timeSpan: 'Apr 2024 - Jul 2024',
    },
    {
      position: 'Junior IT Systems Engineer',
      contractType: 'Trainee',
      company: 'Banco Montepio',
      workPlace: 'Hybrid',
      timeSpan: 'May 2025 - Now',
    },
  ]);
  constructor() {}
}
