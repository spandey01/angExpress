import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreMessageboxComponent } from './e-core-messagebox.component';

describe('ECoreMessageboxComponent', () => {
  let component: ECoreMessageboxComponent;
  let fixture: ComponentFixture<ECoreMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
