import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsUserDashboardComponent } from './cims-user-dashboard.component';

describe('CimsUserDashboardComponent', () => {
  let component: CimsUserDashboardComponent;
  let fixture: ComponentFixture<CimsUserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsUserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
