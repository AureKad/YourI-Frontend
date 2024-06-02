import { Component } from '@angular/core';
import { fade, sentenceAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
  animations: [
    sentenceAnimation,
    fade
  ]
})
export class MissionComponent {
  headerStr = "JOIN TO HELP PEOPLE !";
  header: string[];
  constructor() {
    this.header = this.headerStr.split(' ')
    this.header = this.header.map(word => word!="PEOPLE" ? word + " " : word);
  }
}
