import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from '../../components/stack/stack.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StackComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {}
