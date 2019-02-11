import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsMyIdeasComponent } from './cims-my-ideas.component';

describe('CimsMyIdeasComponent', () => {
  let component: CimsMyIdeasComponent;
  let fixture: ComponentFixture<CimsMyIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsMyIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsMyIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
