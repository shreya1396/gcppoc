import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsBackButtonComponent } from './cims-back-button.component';

describe('CimsBackButtonComponent', () => {
  let component: CimsBackButtonComponent;
  let fixture: ComponentFixture<CimsBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
