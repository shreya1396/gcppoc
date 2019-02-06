import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaFormComponent } from './new-idea-form.component';

describe('NewIdeaFormComponent', () => {
  let component: NewIdeaFormComponent;
  let fixture: ComponentFixture<NewIdeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIdeaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
