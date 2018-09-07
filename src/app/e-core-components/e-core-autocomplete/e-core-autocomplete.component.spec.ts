import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreAutocompleteComponent } from './e-core-autocomplete.component';

describe('ECoreAutocompleteComponent', () => {
  let component: ECoreAutocompleteComponent;
  let fixture: ComponentFixture<ECoreAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
