import { ModuleWithProviders, Type } from '@angular/core';

import { AppRoutingModule } from 'src/router/root-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const IMPORTS: (any[] | Type<any> | ModuleWithProviders<{}>)[] | undefined = [
  BrowserModule,
  AppRoutingModule,
  MatIconModule,
  BrowserAnimationsModule,
];
export { IMPORTS };
