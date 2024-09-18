import { NewJobTitleComponent } from './../app/newUser/new-employer/new-job-title/new-job-title.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';
import { RegisterComponent } from './../app/register/register.component';
import { NewCandidateComponent } from './../app/newUser/new-candidate/new-candidate.component';
import { NewEmployerComponent } from 'src/app/newUser/new-employer/new-employer.component';
import { NewLocationComponent } from 'src/app/newUser/new-employer/new-location/new-location.component';

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
      }
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
