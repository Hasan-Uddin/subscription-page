import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAlert } from './subscription-alert';

describe('SubscriptionAlert', () => {
  let component: SubscriptionAlert;
  let fixture: ComponentFixture<SubscriptionAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
