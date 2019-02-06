import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIdeasFormComponent } from './show-ideas-form.component';

describe('ShowIdeasFormComponent', () => {
  let component: ShowIdeasFormComponent;
  let fixture: ComponentFixture<ShowIdeasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIdeasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIdeasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
