export interface SubscriptionPlan {
  id: number;
  name: string;
  price: number;
  validityDays: number;
  features: string[];
  sms: number;
  duration: string;
  smsIncluded: boolean;
  highlighted: boolean;
  description: string;
}

export interface SubscriptionHistory {
  planName: string;
  amount: number;
  paymentDate: string;
  expiryDate: string;
  status: 'Active' | 'Expired';
}
