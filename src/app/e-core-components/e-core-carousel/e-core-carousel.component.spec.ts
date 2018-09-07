import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreCarouselComponent } from './e-core-carousel.component';

describe('ECoreCarouselComponent', () => {
  let component: ECoreCarouselComponent;
  let fixture: ComponentFixture<ECoreCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
