import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'reuse-input',
  templateUrl: './reuse-input.component.html',
  styleUrls: ['./reuse-input.component.css'],
})
export class ReuseInputComponent implements OnDestroy {
  @ContentChild('input') input: any;

  ngOnDestroy(): void {
    this.title = '';
    this.lable = '';
    this.placeholder = '';
    this.name = '';
    this.type = 'text';
    this.required = false;
    this.class = '';
    this.formControlName;
  }
  @Input() title: string = '';
  @Input() lable: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() class: string = '';
  @Input() formControlName!: string;
}
