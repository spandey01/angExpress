import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreBreadcrumbComponent } from './e-core-breadcrumb.component';

describe('ECoreBreadcrumbComponent', () => {
  let component: ECoreBreadcrumbComponent;
  let fixture: ComponentFixture<ECoreBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
