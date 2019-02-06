import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxRequirementFormComponent } from './cims-idea-box-requirement-form.component';

describe('CimsIdeaBoxRequirementFormComponent', () => {
  let component: CimsIdeaBoxRequirementFormComponent;
  let fixture: ComponentFixture<CimsIdeaBoxRequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxRequirementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxRequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
