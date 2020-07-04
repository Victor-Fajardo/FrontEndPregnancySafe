import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicalExamComponent } from './list-medical-exam.component';

describe('ListMedicalExamComponent', () => {
  let component: ListMedicalExamComponent;
  let fixture: ComponentFixture<ListMedicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
