import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreDialogComponent } from './e-core-dialog.component';

describe('ECoreDialogComponent', () => {
  let component: ECoreDialogComponent;
  let fixture: ComponentFixture<ECoreDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
