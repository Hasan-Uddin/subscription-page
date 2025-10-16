import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionPlan } from '../../models/subscription.plan.model';
import { SubscriptionService } from '../../services/subscription.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchasedModal } from '../purchased-modal/purchased-modal';

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
  freeSMS: number = 0;
  additionalSMS: number = 0;
  additionalSmsCost: number = 0;
  totalPrice: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private subService: SubscriptionService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.calculateTotal(); // initialize total price
  }

  calculateTotal() {
    this.additionalSmsCost = this.smsOption === 'on' ? this.additionalSMS * this.smsUnitPrice : 0;
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
      totalPrice: this.totalPrice,
      paymentDate: now.toLocaleDateString(),
      expiryDate: expiry.toLocaleDateString(),
      status: 'Active',
      freeSMS: 0,
      additionalSMS: 0,
    });

    // Open the purchased modal with purchase details
    const purchasedModal = this.modalService.open(PurchasedModal);
    purchasedModal.componentInstance.openPurchaseDetails(
      this.plan.name,
      this.totalPrice,
      expiry.toLocaleDateString(),
      this.plan.freeSMS, // Example number for Free SMS
      this.additionalSMS // Example number for Extra SMS Added
    );

    this.activeModal.close();
  }
}
