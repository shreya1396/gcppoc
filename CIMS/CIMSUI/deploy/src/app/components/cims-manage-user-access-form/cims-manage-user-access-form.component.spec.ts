import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsManageUserAccessFormComponent } from './cims-manage-user-access-form.component';

describe('CimsManageUserAccessFormComponent', () => {
  let component: CimsManageUserAccessFormComponent;
  let fixture: ComponentFixture<CimsManageUserAccessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsManageUserAccessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsManageUserAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
