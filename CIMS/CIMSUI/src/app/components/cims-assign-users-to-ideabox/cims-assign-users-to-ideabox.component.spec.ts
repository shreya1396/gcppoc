import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsAssignUsersToIdeaboxComponent } from './cims-assign-users-to-ideabox.component';

describe('CimsAssignUsersToIdeaboxComponent', () => {
  let component: CimsAssignUsersToIdeaboxComponent;
  let fixture: ComponentFixture<CimsAssignUsersToIdeaboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsAssignUsersToIdeaboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsAssignUsersToIdeaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
