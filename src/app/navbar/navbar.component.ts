import { Component } from '@angular/core';
import { fade, sentenceAnimation, slide } from '../animations/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    sentenceAnimation,
    fade
  ]
})
export class NavbarComponent {
  headerStr = "LET'S COLLABORATE TO SHAPE THE FUTURE OF, " 
  +"3072 ENDANGERED LANGUAGES AND 3593 STABLE LANGUAGES! " 
  + "LET'S SUPPORT THE NATIVES WHO SPEAK THEM!";
  header: string[];
  constructor() {
    this.header = this.headerStr.split(' ')
  }
}
