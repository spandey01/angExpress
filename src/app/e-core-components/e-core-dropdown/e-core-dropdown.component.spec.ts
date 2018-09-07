import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreDropdownComponent } from './e-core-dropdown.component';

describe('ECoreDropdownComponent', () => {
  let component: ECoreDropdownComponent;
  let fixture: ComponentFixture<ECoreDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
