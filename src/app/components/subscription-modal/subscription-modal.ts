import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionPlan } from '../../models/subscription.model';
import { SubscriptionService } from '../../services/subscription.services';
@Component({
  selector: 'app-subscription-modal',
  imports: [],
  templateUrl: './subscription-modal.html',
  styleUrl: './subscription-modal.css',
})
export class SubscriptionModal {
  @Input() plan!: SubscriptionPlan;

  constructor(public activeModal: NgbActiveModal, private subService: SubscriptionService) {}

  close() {
    this.activeModal.dismiss();
  }

  // For Testing, change here for back end call
  confirmPurchase() {
    const now = new Date();
    const expiry = new Date();
    expiry.setDate(now.getDate() + this.plan.validityDays);

    this.subService.addToHistory({
      planName: this.plan.name,
      amount: this.plan.price,
      paymentDate: now.toLocaleDateString(),
      expiryDate: expiry.toLocaleDateString(),
      status: 'Active',
    });

    this.activeModal.close();
  }
}
