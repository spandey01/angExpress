import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreMenuComponent } from './e-core-menu.component';

describe('ECoreMenuComponent', () => {
  let component: ECoreMenuComponent;
  let fixture: ComponentFixture<ECoreMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
