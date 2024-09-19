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
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { CompanyProfileComponent } from './dashboard/company/company-profile/company-profile.component';
import { CompanyNewPostComponent } from './dashboard/company/company-new-post/company-new-post.component';
import { CompanyListApplicantsComponent } from './dashboard/company/company-list-applicants/company-list-applicants.component';
import { CompanySettingsComponent } from './dashboard/company/company-settings/company-settings.component';

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
    DashboardComponent,
    SideBarComponent,
    CompanyProfileComponent,
    CompanyNewPostComponent,
    CompanyListApplicantsComponent,
    CompanySettingsComponent
  ],
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
