import { Component } from '@angular/core';
import { fade, sentenceAnimation } from '../../../animations/animations';

@Component({
  selector: 'navbar-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    sentenceAnimation,
    fade
  ]
})
export class HeaderComponent {
  headerStr = "LET'S COLLABORATE TO SHAPE THE FUTURE OF, " 
  +"3072 ENDANGERED LANGUAGES AND 3593 STABLE LANGUAGES! " 
  + "LET'S SUPPORT THE NATIVES WHO SPEAK THEM!";
  header: string[];
  constructor() {
    this.header = this.headerStr.split(' ')
  }
}
