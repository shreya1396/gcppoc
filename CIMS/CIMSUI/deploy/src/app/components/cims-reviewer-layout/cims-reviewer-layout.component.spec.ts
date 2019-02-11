import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsReviewerLayoutComponent } from './cims-reviewer-layout.component';

describe('CimsReviewerLayoutComponent', () => {
  let component: CimsReviewerLayoutComponent;
  let fixture: ComponentFixture<CimsReviewerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsReviewerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsReviewerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
