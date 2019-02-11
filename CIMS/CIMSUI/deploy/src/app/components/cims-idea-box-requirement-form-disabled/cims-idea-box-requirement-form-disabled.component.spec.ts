import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxRequirementFormDisabledComponent } from './cims-idea-box-requirement-form-disabled.component';

describe('CimsIdeaBoxRequirementFormDisabledComponent', () => {
  let component: CimsIdeaBoxRequirementFormDisabledComponent;
  let fixture: ComponentFixture<CimsIdeaBoxRequirementFormDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxRequirementFormDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxRequirementFormDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
