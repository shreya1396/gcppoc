import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsUserLayoutComponent } from './cims-user-layout.component';

describe('CimsUserLayoutComponent', () => {
  let component: CimsUserLayoutComponent;
  let fixture: ComponentFixture<CimsUserLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsUserLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
