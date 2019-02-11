import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsTakeDecisionDialogboxComponent } from './cims-take-decision-dialogbox.component';

describe('CimsTakeDecisionDialogboxComponent', () => {
  let component: CimsTakeDecisionDialogboxComponent;
  let fixture: ComponentFixture<CimsTakeDecisionDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsTakeDecisionDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsTakeDecisionDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
