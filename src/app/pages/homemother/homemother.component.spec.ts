import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemotherComponent } from './homemother.component';

describe('HomemotherComponent', () => {
  let component: HomemotherComponent;
  let fixture: ComponentFixture<HomemotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
