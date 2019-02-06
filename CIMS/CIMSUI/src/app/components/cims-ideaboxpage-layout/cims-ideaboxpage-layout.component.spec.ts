import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaboxpageLayoutComponent } from './cims-ideaboxpage-layout.component';

describe('CimsIdeaboxpageLayoutComponent', () => {
  let component: CimsIdeaboxpageLayoutComponent;
  let fixture: ComponentFixture<CimsIdeaboxpageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaboxpageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaboxpageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
