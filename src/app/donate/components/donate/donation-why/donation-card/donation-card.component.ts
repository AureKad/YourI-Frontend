import { Component, Input } from '@angular/core';

@Component({
  selector: 'donation-card',
  templateUrl: './donation-card.component.html',
  styleUrl: './donation-card.component.scss'
})
export class DonationCardComponent {
  @Input('title') title!: string;
  @Input('description') description!: string;
}
