import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreSliderComponent } from './e-core-slider.component';

describe('ECoreSliderComponent', () => {
  let component: ECoreSliderComponent;
  let fixture: ComponentFixture<ECoreSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
