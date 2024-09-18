import { ReuseInputComponent } from './../components/reuse-input/reuse-input.component';
import { LandingComponent } from 'src/app/landing/landing.component';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IMPORTS } from './imports';
import { HeaderComponent } from './layout/header/header.component';
import { RegisterComponent } from './register/register.component';
import { NewCandidateComponent } from './newUser/new-candidate/new-candidate.component';
import { NewEmployerComponent } from './newUser/new-employer/new-employer.component';
import { NewLocationComponent } from './newUser/new-employer/new-location/new-location.component';
import { NewJobTitleComponent } from './newUser/new-employer/new-job-title/new-job-title.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    RegisterComponent,
    NewCandidateComponent,
    NewEmployerComponent,
    ReuseInputComponent,
    NewLocationComponent,
    NewJobTitleComponent,
  ],
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
