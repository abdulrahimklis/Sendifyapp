import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAgencyComponent } from './choose-agency.component';

describe('ChooseAgencyComponent', () => {
  let component: ChooseAgencyComponent;
  let fixture: ComponentFixture<ChooseAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
