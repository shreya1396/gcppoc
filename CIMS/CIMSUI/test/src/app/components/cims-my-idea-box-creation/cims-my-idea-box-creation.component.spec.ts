import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsMyIdeaBoxCreationComponent } from './cims-my-idea-box-creation.component';

describe('CimsMyIdeaBoxCreationComponent', () => {
  let component: CimsMyIdeaBoxCreationComponent;
  let fixture: ComponentFixture<CimsMyIdeaBoxCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsMyIdeaBoxCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsMyIdeaBoxCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
