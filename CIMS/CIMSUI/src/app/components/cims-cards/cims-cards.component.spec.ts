import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsCardsComponent } from './cims-cards.component';

describe('CimsCardsComponent', () => {
  let component: CimsCardsComponent;
  let fixture: ComponentFixture<CimsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
