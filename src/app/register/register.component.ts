import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public route: Router) {}
  move(arg0: string) {  
      this.route.navigateByUrl(arg0)
  }
}
