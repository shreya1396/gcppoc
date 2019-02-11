import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxFormComponent } from './cims-idea-box-form.component';

describe('CimsIdeaBoxFormComponent', () => {
  let component: CimsIdeaBoxFormComponent;
  let fixture: ComponentFixture<CimsIdeaBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
