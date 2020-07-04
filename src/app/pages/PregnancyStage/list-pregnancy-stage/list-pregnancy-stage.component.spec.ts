import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPregnancyStageComponent } from './list-pregnancy-stage.component';

describe('ListPregnancyStageComponent', () => {
  let component: ListPregnancyStageComponent;
  let fixture: ComponentFixture<ListPregnancyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPregnancyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPregnancyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
