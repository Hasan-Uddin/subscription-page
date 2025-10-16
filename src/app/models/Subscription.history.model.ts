export interface SubscriptionHistory {
  planName: string;
  totalPrice: number;
  freeSMS: number;
  additionalSMS: number;
  paymentDate: string;
  expiryDate: string;
  status: string; // 'Active' | 'Expired'
}
