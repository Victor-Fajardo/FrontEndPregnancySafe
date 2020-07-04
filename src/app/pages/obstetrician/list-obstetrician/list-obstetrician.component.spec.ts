import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObstetricianComponent } from './list-obstetrician.component';

describe('ListObstetricianComponent', () => {
  let component: ListObstetricianComponent;
  let fixture: ComponentFixture<ListObstetricianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObstetricianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObstetricianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
