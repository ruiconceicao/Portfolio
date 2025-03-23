import { Component, inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-developing-warning',
  imports: [],
  templateUrl: './developing-warning.component.html',
  styleUrl: './developing-warning.component.scss',
  animations: [
    trigger('popup', [
      state('hidden', style({  })),
      state(
        'visible',
        style({
          display: 'block',
          opacity: '1',
        })
      ),
      transition('hidden => visible', animate('300ms ease-in-out')),
      transition('visible => hidden', animate('150ms ease-in')),
    ]),
  ],
})
export class DevelopingWarningComponent {
  readonly headerComponent = inject(HeaderComponent);
}
