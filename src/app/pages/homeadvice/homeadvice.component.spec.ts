import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadviceComponent } from './homeadvice.component';

describe('HomeadviceComponent', () => {
  let component: HomeadviceComponent;
  let fixture: ComponentFixture<HomeadviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeadviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
