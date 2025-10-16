import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.services';
import { SubscriptionPlan } from '../../models/subscription.plan.model';
import { SubscriptionHistory } from '../../models/Subscription.history.model';
import { SubscriptionModal } from '../subscription-modal/subscription-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PlanList } from '../plan-list/plan-list';

@Component({
  selector: 'app-subscriptions',
  imports: [CommonModule, PlanList],
  templateUrl: './subscriptions.html',
  styleUrls: ['./subscriptions.css'],
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
