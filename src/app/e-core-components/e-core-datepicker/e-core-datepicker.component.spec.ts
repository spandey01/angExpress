import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreDatepickerComponent } from './e-core-datepicker.component';

describe('ECoreDatepickerComponent', () => {
  let component: ECoreDatepickerComponent;
  let fixture: ComponentFixture<ECoreDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
