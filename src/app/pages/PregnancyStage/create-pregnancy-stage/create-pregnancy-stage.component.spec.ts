import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePregnancyStageComponent } from './create-pregnancy-stage.component';

describe('CreatePregnancyStageComponent', () => {
  let component: CreatePregnancyStageComponent;
  let fixture: ComponentFixture<CreatePregnancyStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePregnancyStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePregnancyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
