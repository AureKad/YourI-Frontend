import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { DonationGoalComponent } from './components/donate/donation-goal/donation-goal.component';
import { DonationWhyComponent } from './components/donate/donation-why/donation-why.component';
import { DonationCardComponent } from './components/donate/donation-why/donation-card/donation-card.component';
import { SuccessComponent } from './components/donate/donation-success/success.component';
import { DonationFormComponent } from './components/donate/donation-form/donation-form.component';
import { DonateComponent } from './components/donate/donate.component';



@NgModule({
  declarations: [
    DonateComponent,
    DonationFormComponent,
    DonationGoalComponent,
    DonationWhyComponent,
    DonationCardComponent,
    SuccessComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    CurrencyPipe,
    DecimalPipe
  ]
})
export class DonateModule { }
