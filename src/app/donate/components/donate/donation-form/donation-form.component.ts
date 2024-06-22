import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../../../shared/services/validation.service';
import { StripeService } from '../../../services/stripe.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'donation-form',
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.scss'
})
export class DonationFormComponent {
  money!: number | null;
  form = new FormGroup({
      frequency: new FormControl('once', Validators.required),
      amount: new FormControl<number>(0, Validators.required)
    },
    {validators: ValidationService.donationNotAppropriateAmount}
  )

  isLoading = false;



  constructor(private stripeService: StripeService, public dialog: MatDialog) {}


  get frequency() {
    return this.form.get('frequency');
  }

  get amount() {
    return this.form.get('amount');
  }


  resetAmount() {
    this.form.controls['amount'].reset()
  }

  donate() {
    let data = this.form.value
    
    if (!data.amount) 
      throw new Error()
    this.isLoading = true;
    if (data.frequency=='once') 
      this.stripeService.checkoutPayment(data.amount);
    else {
      this.recurrentMonthly(data.amount);
    }
    this.isLoading = false;
    
  }

  private recurrentMonthly(amount: number) {
    switch(Number(amount)) {
      case 25:
        this.stripeService.checkoutMonthly25();
        break;
      case 50:
        this.stripeService.checkoutMonthly50();
        break;
      case 100: 
        this.stripeService.checkoutMonthly100();
        break;
      case 250: 
        this.stripeService.checkoutMonthly250();
        break;
      default: 
        throw new Error("Only Monthly Payments of 25€, 50€, 100€, or 250€ are allowed")
      
    }
  }

}
