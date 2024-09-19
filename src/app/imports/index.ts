import { ModuleWithProviders, Type } from '@angular/core';
import { AppRoutingModule } from 'src/router/root-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

const IMPORTS: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatIconModule,
  MatFormFieldModule
];
export { IMPORTS };
