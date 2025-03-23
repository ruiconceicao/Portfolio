import { Component, inject, Input } from '@angular/core';
import { SvgService } from '../../services/svg.service';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  readonly svgService = inject(SvgService);
}
