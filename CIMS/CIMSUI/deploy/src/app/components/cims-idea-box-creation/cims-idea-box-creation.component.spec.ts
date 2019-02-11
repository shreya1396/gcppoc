import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxCreationComponent } from './cims-idea-box-creation.component';

describe('CimsIdeaBoxCreationComponent', () => {
  let component: CimsIdeaBoxCreationComponent;
  let fixture: ComponentFixture<CimsIdeaBoxCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
