import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimsIdeaFiledAgainstIdeaneedComponent } from './cims-idea-filed-against-ideaneed.component';

describe('CimsIdeaFiledAgainstIdeaneedComponent', () => {
  let component: CimsIdeaFiledAgainstIdeaneedComponent;
  let fixture: ComponentFixture<CimsIdeaFiledAgainstIdeaneedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimsIdeaFiledAgainstIdeaneedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimsIdeaFiledAgainstIdeaneedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
