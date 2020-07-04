import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotherComponent } from './list-mother.component';

describe('ListMotherComponent', () => {
  let component: ListMotherComponent;
  let fixture: ComponentFixture<ListMotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
