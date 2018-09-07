import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreVideoComponent } from './e-core-video.component';

describe('ECoreVideoComponent', () => {
  let component: ECoreVideoComponent;
  let fixture: ComponentFixture<ECoreVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
