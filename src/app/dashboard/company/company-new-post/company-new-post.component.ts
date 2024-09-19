import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-new-post',
  templateUrl: './company-new-post.component.html',
  styleUrls: ['./company-new-post.component.css'],
})
export class CompanyNewPostComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
