import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaBoxPageComponent } from './cims-idea-box-page.component';

describe('CimsIdeaBoxPageComponent', () => {
  let component: CimsIdeaBoxPageComponent;
  let fixture: ComponentFixture<CimsIdeaBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
