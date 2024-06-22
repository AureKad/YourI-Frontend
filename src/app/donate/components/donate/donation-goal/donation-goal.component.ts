import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../../services/stripe.service';

@Component({
  selector: 'donation-goal',
  templateUrl: './donation-goal.component.html',
  styleUrl: './donation-goal.component.scss'
})
export class DonationGoalComponent implements OnInit {
  raised = 0;
  goal = 5000;
  raised_percentage!: number;

  constructor(private stripeService: StripeService) {}

  ngOnInit(): void {
    this.raised == 0 ? this.raised_percentage = 0 : this.raised_percentage = this.raised*100 /this.goal; 
    this.stripeService.getMoneyRaised().subscribe(
      raised => {
        this.raised = raised/100;
        this.updateGoal();
      },
      error => new Error("Couldn't get total money raised")
    )
  }

  updateGoal() {
    this.raised == 0 ? this.raised_percentage = 0 : this.raised_percentage = this.raised*100 /this.goal; 
  }
}
