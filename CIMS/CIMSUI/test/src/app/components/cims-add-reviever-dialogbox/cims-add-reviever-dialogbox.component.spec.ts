import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsAddRevieverDialogboxComponent } from './cims-add-reviever-dialogbox.component';

describe('CimsAddRevieverDialogboxComponent', () => {
  let component: CimsAddRevieverDialogboxComponent;
  let fixture: ComponentFixture<CimsAddRevieverDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsAddRevieverDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsAddRevieverDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
