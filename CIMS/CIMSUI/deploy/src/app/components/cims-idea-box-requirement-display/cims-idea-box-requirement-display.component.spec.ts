import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxRequirementDisplayComponent } from './cims-idea-box-requirement-display.component';

describe('CimsIdeaBoxRequirementDisplayComponent', () => {
  let component: CimsIdeaBoxRequirementDisplayComponent;
  let fixture: ComponentFixture<CimsIdeaBoxRequirementDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxRequirementDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxRequirementDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
