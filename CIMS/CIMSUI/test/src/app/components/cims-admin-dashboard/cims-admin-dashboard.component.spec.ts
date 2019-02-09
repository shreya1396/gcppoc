import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsAdminDashboardComponent } from './cims-admin-dashboard.component';

describe('CimsAdminDashboardComponent', () => {
  let component: CimsAdminDashboardComponent;
  let fixture: ComponentFixture<CimsAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
