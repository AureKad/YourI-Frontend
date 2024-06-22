import { Component, Input } from '@angular/core';

@Component({
  selector: 'facts-card',
  templateUrl: './facts-card.component.html',
  styleUrl: './facts-card.component.scss'
})
export class FactsCardComponent {
  @Input('number') number!: number;
  @Input('description') description!: string;
}
