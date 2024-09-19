import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListApplicantsComponent } from './company-list-applicants.component';

describe('CompanyListApplicantsComponent', () => {
  let component: CompanyListApplicantsComponent;
  let fixture: ComponentFixture<CompanyListApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyListApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyListApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
