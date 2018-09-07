import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELayoutComponent } from './e-layout.component';

describe('ComponentLayoutComponent', () => {
  let component: ELayoutComponent;
  let fixture: ComponentFixture<ELayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
