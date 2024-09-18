import { Component, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-new-job-title',
  templateUrl: './new-job-title.component.html',
  styleUrls: ['./new-job-title.component.css'],
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
export class NewJobTitleComponent {
  newEmployerJobTitle: FormGroup = new FormGroup({
    job_title: new FormControl<string>(''),
    job_title_tags: new FormControl<string[]>([]),
  });

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;
  send() {
    console.log(this.newEmployerJobTitle.getRawValue());
  }

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(''),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && !this.fruits.includes(value)) {
      this.fruits.push(value);
      this.newEmployerJobTitle.get('job_title_tags')?.setValue(this.fruits);
    }

    if (event.input) {
      event.input.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.newEmployerJobTitle.get('job_title_tags')?.setValue(this.fruits);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (value && !this.fruits.includes(value)) {
      this.fruits.push(value);
      this.newEmployerJobTitle.get('job_title_tags')?.setValue(this.fruits);
    }
    if (this.fruitInput) {
      this.fruitInput.nativeElement.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  clearList(): void {
    this.fruits = [];
    this.newEmployerJobTitle.get('job_title_tags')?.setValue(this.fruits);
  }
}
