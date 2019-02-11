import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsManageIdeaboxAccessFormComponent } from './cims-manage-ideabox-access-form.component';

describe('CimsManageIdeaboxAccessFormComponent', () => {
  let component: CimsManageIdeaboxAccessFormComponent;
  let fixture: ComponentFixture<CimsManageIdeaboxAccessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsManageIdeaboxAccessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsManageIdeaboxAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
