import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('title') title!: string;
  @Input('description') description!: string;
  @Input('icon') icon!: string;
}
