import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalExamComponent } from './create-medical-exam.component';

describe('CreateMedicalExamComponent', () => {
  let component: CreateMedicalExamComponent;
  let fixture: ComponentFixture<CreateMedicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMedicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
