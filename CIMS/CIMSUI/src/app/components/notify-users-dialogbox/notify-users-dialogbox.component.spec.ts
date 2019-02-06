import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyUsersDialogboxComponent } from './notify-users-dialogbox.component';

describe('NotifyUsersDialogboxComponent', () => {
  let component: NotifyUsersDialogboxComponent;
  let fixture: ComponentFixture<NotifyUsersDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyUsersDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyUsersDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
