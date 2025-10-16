import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedModal } from './purchased-modal';

describe('PurchasedModal', () => {
  let component: PurchasedModal;
  let fixture: ComponentFixture<PurchasedModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasedModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
