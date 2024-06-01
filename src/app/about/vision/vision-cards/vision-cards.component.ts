import { Component, Input } from '@angular/core';

@Component({
  selector: 'vision-cards',
  templateUrl: './vision-cards.component.html',
  styleUrl: './vision-cards.component.scss'
})
export class VisionCardsComponent {
  @Input('title') title!: string;
  @Input('description') description!: string;
  @Input('icon') icon!: string;
}
