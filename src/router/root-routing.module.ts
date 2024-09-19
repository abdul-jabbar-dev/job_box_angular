import { DashboardComponent } from './../app/dashboard/dashboard.component';
import { DashboardComponent as CompanyDashboardComponent } from './../app/dashboard/company/dashboard/dashboard.component';
import { NewJobTitleComponent } from './../app/newUser/new-employer/new-job-title/new-job-title.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';
import { RegisterComponent } from './../app/register/register.component';
import { NewCandidateComponent } from './../app/newUser/new-candidate/new-candidate.component';
import { NewEmployerComponent } from 'src/app/newUser/new-employer/new-employer.component';
import { NewLocationComponent } from 'src/app/newUser/new-employer/new-location/new-location.component';
import { CompanyProfileComponent } from 'src/app/dashboard/company/company-profile/company-profile.component';
import { CompanyNewPostComponent } from 'src/app/dashboard/company/company-new-post/company-new-post.component';
import { CompanyListApplicantsComponent } from 'src/app/dashboard/company/company-list-applicants/company-list-applicants.component';
import { CompanySettingsComponent } from 'src/app/dashboard/company/company-settings/company-settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-candidate', component: NewCandidateComponent },
  {
    path: 'new-employer',
    redirectTo: 'new-employer/location',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: CompanyDashboardComponent },
      { path: 'company-profile', component: CompanyProfileComponent },
      { path: 'post-job', component: CompanyNewPostComponent },
      { path: 'applicants', component: CompanyListApplicantsComponent },
      { path: 'settings', component: CompanySettingsComponent },
    ],
  },
  {
    path: 'new-employer',
    component: NewEmployerComponent,
    children: [
      {
        path: 'location',
        component: NewLocationComponent,
      },
      {
        path: 'job-title',
        component: NewJobTitleComponent,
      },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
