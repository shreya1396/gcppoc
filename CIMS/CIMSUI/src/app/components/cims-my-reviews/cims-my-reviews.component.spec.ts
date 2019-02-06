import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsMyReviewsComponent } from './cims-my-reviews.component';

describe('CimsMyReviewsComponent', () => {
  let component: CimsMyReviewsComponent;
  let fixture: ComponentFixture<CimsMyReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsMyReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsMyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
