import { Injectable } from '@angular/core';
import { Stripe, StripeElements, loadStripe, StripeCardElement } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeServiceService {
  private stripe: Stripe | null = null;
  private elements: StripeElements | null = null;

  constructor() {
    // Make sure to load Stripe with your publishable key
    loadStripe('your-publishable-key').then(stripe => {
      this.stripe = stripe;
      if (this.stripe) {
        this.elements = this.stripe.elements();
      }
    });
  }

  // Create Stripe Elements Card Element
  createCardElement(): StripeCardElement {
    if (this.elements) {
      return this.elements.create('card');
    }
    throw new Error('Stripe Elements not initialized');
  }

  // Confirm the payment intent using the stripe library
  confirmCardPayment(paymentIntentId: string, paymentMethod: any) {
    if (!this.stripe) {
      throw new Error('Stripe not initialized');
    }

    return this.stripe.confirmCardPayment(paymentIntentId, {
      payment_method: paymentMethod,
    });
  }
}