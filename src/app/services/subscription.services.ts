import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubscriptionPlan } from '../models/subscription.plan.model';
import { SubscriptionHistory } from '../models/Subscription.history.model';

//--you can change and add plans here---
@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  plans: SubscriptionPlan[] = [
    {
      id: 1,
      name: 'Minimum',
      price: 100,
      validityDays: 15,
      features: ['Unlimited ID', 'SMS: OFF'],
      freeSMS: 0,
      duration: '10 Days',
      smsIncluded: false,
      highlighted: false,
      description: 'Essentials for Startups - Simple, Affordable, and Effective.',
    },
    {
      id: 2,
      name: 'Popular',
      price: 500,
      validityDays: 30,
      features: ['Unlimited ID', 'Free SMS: 415'],
      freeSMS: 415,
      duration: '30 Days',
      smsIncluded: true,
      highlighted: true,
      description: 'The Smart Choice for Success! Our most popular Plan.',
    },
    {
      id: 3,
      name: 'Enterprise (Monthly)',
      price: 1000,
      validityDays: 30,
      features: ['Unlimited ID', 'Free SMS: 850'],
      duration: '30 Days',
      freeSMS: 850,
      smsIncluded: true,
      highlighted: false,
      description: 'Premium Solution for Enterprise.',
    },
    {
      id: 4,
      name: 'Enterprise (Yearly)',
      price: 5000,
      validityDays: 365,
      features: ['Unlimited ID', 'Free SMS: 5000'],
      freeSMS: 5000,
      duration: '1 Year',
      smsIncluded: true,
      highlighted: false,
      description: 'Best Value for Long-Term Growth.',
    },
  ];

  private _history = new BehaviorSubject<SubscriptionHistory[]>([]);
  history$ = this._history.asObservable();

  addToHistory(item: SubscriptionHistory) {
    const current = this._history.value;
    this._history.next([...current, item]);
  }
}
