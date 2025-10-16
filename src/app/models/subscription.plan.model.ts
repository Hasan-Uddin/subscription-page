export interface SubscriptionPlan {
  id: number;
  name: string;
  price: number;
  validityDays: number;
  features: string[];
  freeSMS: number;
  duration: string;
  smsIncluded: boolean;
  highlighted: boolean;
  description: string;
}
