import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotherComponent } from './create-mother.component';

describe('CreateMotherComponent', () => {
  let component: CreateMotherComponent;
  let fixture: ComponentFixture<CreateMotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
