import { Component } from '@angular/core';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css'],
  animations: [
    trigger('slideIn', [
      state(
        'void',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          '0.3s ease-out',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class NewLocationComponent {
  constructor(public router: Router) {}

  send() {
    console.log(this.newEmployerAddress.getRawValue());
    this.router.navigateByUrl('/new-employer/job-title');
  }
  newEmployerAddress = new FormGroup({
    road_area: new FormControl<string>('', [Validators.required]),
    state_city: new FormControl<string>('', [Validators.required]),
    zip_code: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern('^[0-9]{5}$'),
    ]),
  });
}
