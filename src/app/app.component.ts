import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.animated-item', [
          style({ transform: 'translateY(20px)', opacity: 0 }),
        ]),

        query('.animated-item', [
          stagger(200, [
            animate(
              '0.6s ease-out',
              style({ transform: 'translateY(0)', opacity: 1 })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  items = ['children', 'children', 'children'];
}
