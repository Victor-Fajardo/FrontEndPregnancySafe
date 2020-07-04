import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeobstetricianComponent } from './homeobstetrician.component';

describe('HomeobstetricianComponent', () => {
  let component: HomeobstetricianComponent;
  let fixture: ComponentFixture<HomeobstetricianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeobstetricianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeobstetricianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
