import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchased-modal',
  imports: [CommonModule],
  templateUrl: './purchased-modal.html',
  styleUrl: './purchased-modal.css',
})
export class PurchasedModal {
  //@Input() plan!: SubscriptionPlan;
  totalPrice: number = 0;
  planName: string = '';
  expiryDate: string = '';
  freeSms: number = 0;
  additionalSms: number = 0;

  constructor(public activeModal: NgbActiveModal) {}

  // You will pass these values when opening the modal
  openPurchaseDetails(
    planName: string,
    totalPrice: number,
    expiryDate: string,
    freeSms: number,
    additionalSms: number
  ) {
    this.planName = planName;
    this.totalPrice = totalPrice;
    this.expiryDate = expiryDate;
    this.freeSms = freeSms;
    this.additionalSms = additionalSms;
  }

  close() {
    this.activeModal.dismiss();
  }
}
