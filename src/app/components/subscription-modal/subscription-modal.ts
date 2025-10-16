import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionPlan } from '../../models/subscription.model';
import { SubscriptionService } from '../../services/subscription.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './subscription-modal.css',
})
export class SubscriptionModal {
  @Input() plan!: SubscriptionPlan;

  smsOption: 'off' | 'on' = 'off';
  smsUnitPrice: number = 0.6;
  smsQuantity: number = 0;
  additionalSmsCost: number = 0;
  totalPrice: number = 0;

  constructor(public activeModal: NgbActiveModal, private subService: SubscriptionService) {}

  ngOnInit() {
    this.calculateTotal(); // initialize total price
  }

  calculateTotal() {
    this.additionalSmsCost = this.smsOption === 'on' ? this.smsQuantity * this.smsUnitPrice : 0;
    this.totalPrice = this.plan.price + this.additionalSmsCost;
  }

  close() {
    this.activeModal.dismiss();
  }

  confirmPurchase() {
    const now = new Date();
    const expiry = new Date();
    expiry.setDate(now.getDate() + this.plan.validityDays);

    this.subService.addToHistory({
      planName: this.plan.name,
      amount: this.totalPrice,
      paymentDate: now.toLocaleDateString(),
      expiryDate: expiry.toLocaleDateString(),
      status: 'Active',
    });

    this.activeModal.close();
  }
}
