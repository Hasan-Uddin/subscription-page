import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.services';
import { SubscriptionHistory, SubscriptionPlan } from '../../models/subscription.model';
import { SubscriptionModal } from '../subscription-modal/subscription-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscriptions',
  imports: [CommonModule],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.css',
})
export class Subscriptions {
  plans: SubscriptionPlan[] = [];
  history: SubscriptionHistory[] = [];

  constructor(private subService: SubscriptionService, private modal: NgbModal) {
    this.plans = this.subService.plans;
    this.subService.history$.subscribe((h) => (this.history = h));
  }

  openModal(plan: SubscriptionPlan) {
    const ref = this.modal.open(SubscriptionModal, { centered: true });
    ref.componentInstance.plan = plan;
  }
}
