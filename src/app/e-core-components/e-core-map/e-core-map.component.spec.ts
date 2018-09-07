import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreMapComponent } from './e-core-map.component';

describe('ECoreMapComponent', () => {
  let component: ECoreMapComponent;
  let fixture: ComponentFixture<ECoreMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
