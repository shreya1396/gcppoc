import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsInnovationLayoutComponent } from './cims-innovation-layout.component';

describe('CimsInnovationLayoutComponent', () => {
  let component: CimsInnovationLayoutComponent;
  let fixture: ComponentFixture<CimsInnovationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsInnovationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsInnovationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
