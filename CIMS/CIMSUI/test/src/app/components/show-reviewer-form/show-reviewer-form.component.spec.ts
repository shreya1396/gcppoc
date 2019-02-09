import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewerFormComponent } from './show-reviewer-form.component';

describe('ShowReviewerFormComponent', () => {
  let component: ShowReviewerFormComponent;
  let fixture: ComponentFixture<ShowReviewerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReviewerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
