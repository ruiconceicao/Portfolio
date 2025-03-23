import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects = signal<Project[]>([
    {
      id: 0,
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Under development...',
      title: 'Digital Portfolio',
      description:
        'This project stands for this entire website, which serves as my digital portfolio, showcasing my skills, experiences, projects and professional contacts.',
      techStack: ['html', 'css', 'javascript', 'sass', 'typescript', 'angular'],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    },
    /*     {
      id: 0,
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Under development...',
      title: 'Digital Portfolio',
      description:
        'Este projeto representa todo este website que serve como Portefólio Digital onde reúno os meus projetos, experiências e formações, facilitando a consulta e o contacto profissional.',
      techStack: ['angular', 'typescript', 'javascript', 'sass', 'css', 'html'],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    }, */
  ]);

  constructor() {}
}
