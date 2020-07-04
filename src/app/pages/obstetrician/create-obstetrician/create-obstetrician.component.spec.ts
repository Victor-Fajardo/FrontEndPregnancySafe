import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObstetricianComponent } from './create-obstetrician.component';

describe('CreateObstetricianComponent', () => {
  let component: CreateObstetricianComponent;
  let fixture: ComponentFixture<CreateObstetricianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObstetricianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObstetricianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
