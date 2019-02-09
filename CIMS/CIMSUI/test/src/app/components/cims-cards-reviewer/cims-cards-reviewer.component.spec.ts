import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsCardsReviewerComponent } from './cims-cards-reviewer.component';

describe('CimsCardsReviewerComponent', () => {
  let component: CimsCardsReviewerComponent;
  let fixture: ComponentFixture<CimsCardsReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsCardsReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsCardsReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
