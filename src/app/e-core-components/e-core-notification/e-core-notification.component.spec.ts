import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECoreNotificationComponent } from './e-core-notification.component';

describe('ECoreNotificationComponent', () => {
  let component: ECoreNotificationComponent;
  let fixture: ComponentFixture<ECoreNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECoreNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECoreNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
