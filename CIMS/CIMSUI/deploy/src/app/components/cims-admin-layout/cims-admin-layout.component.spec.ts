import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsAdminLayoutComponent } from './cims-admin-layout.component';

describe('CimsAdminLayoutComponent', () => {
  let component: CimsAdminLayoutComponent;
  let fixture: ComponentFixture<CimsAdminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsAdminLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
