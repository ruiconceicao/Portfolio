import { Injectable, signal } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experiences = signal<Experience[]>([
    {
      position: 'IT Systems Engineer',
      contractType: 'Full-time',
      company: 'Banco Montepio',
      workPlace: 'Hybrid',
      timeSpan: 'Feb 2026 - Now',
    },
    {
      position: 'IT Systems Engineer',
      contractType: 'Trainee',
      company: 'Banco Montepio',
      workPlace: 'Hybrid',
      timeSpan: 'May 2025 - Feb 2026',
    },
    {
      position: 'Full Stack Development and IT Support',
      contractType: 'Internship',
      company: 'Sindicato da Banca, Seguros e Tecnologias',
      workPlace: 'On-site',
      timeSpan: 'Apr 2024 - Jul 2024',
    }
  ]);
  constructor() {}
}
