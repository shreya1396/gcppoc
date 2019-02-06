import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsShowUserComponent } from './cims-show-user.component';

describe('CimsShowUserComponent', () => {
  let component: CimsShowUserComponent;
  let fixture: ComponentFixture<CimsShowUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsShowUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
