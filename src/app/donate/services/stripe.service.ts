import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js/pure';
import { SkipLoading } from '../../shared/services/loading.interceptor';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  stripePromise = loadStripe(environment.stripe.stripeKey);
  apiServerUrl = environment.apiBaseUrl;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  async checkoutPayment(amount: number) {
    const stripe = await this.getStripe()
    const payment = {
      name: 'Donation to YI',
      description: 'This donation supports our Color-Code Dictionary project. Thank you very much for your contribution!',
      currency: 'eur',
      amount: amount*100,
      cancelUrl: this.baseUrl + '/donate',
      successUrl: this.baseUrl + '/donate/success'
    }
    

    return this.http.post<any>(this.apiServerUrl + '/payment', payment).subscribe(
      data => {
        stripe.redirectToCheckout({
          sessionId: data.id
        })
      },
      error => {
        throw new Error("Payment not possible, please try again later")
      }
    );
  }

  async checkoutMonthly25() {
    return this.checkoutRecurrent(environment.stripe.priceIdMonthly25);
  }

  async checkoutMonthly50() {
    return this.checkoutRecurrent(environment.stripe.priceIdMonthly50);
  }

  async checkoutMonthly100() {
    return this.checkoutRecurrent(environment.stripe.priceIdMonthly100);
  }

  async checkoutMonthly250() {
    return this.checkoutRecurrent(environment.stripe.priceIdMonthly250);
  }

  private async checkoutRecurrent(priceId: string) {
    const stripe = await this.getStripe()
    const payment = {
      priceId: priceId,
      cancelUrl: this.baseUrl + '/donate',
      successUrl: this.baseUrl + '/donate/success'
    }

    return this.http.post<any>(this.apiServerUrl + '/payment/monthly', payment).subscribe(
      data => {
        stripe.redirectToCheckout({
          sessionId: data.id
        })
      },
      error => {
        throw new Error("Payment not possible, please try again later")
      }
    );
  }

  getMoneyRaised() {
    return this.http.get<number>(this.apiServerUrl + '/payment/raised', {
      context: new HttpContext().set(SkipLoading, true)
    })
    
  }

  private async getStripe() {
    const stripe = await this.stripePromise;
    if (!stripe) 
      throw new Error ("Can't connect to stripe");
    return stripe
  }
}
