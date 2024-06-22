import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Volunteer } from '../../../shared/models/volunteer';
import { VolunteerService } from '../../services/volunteer.service';

@Component({
  selector: 'app-volunteer-view',
  templateUrl: './volunteer-view.component.html',
  styleUrl: './volunteer-view.component.scss'
})
export class VolunteerViewComponent {
  volunteers!: Volunteer[];
  filteredVolunteers: any;


  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe(
      result => {
        let res = result.reverse();
        this.convertToDate(res)
        this.volunteers = this.filteredVolunteers = res
      },
      err => {
        if (err.status == 403) {
          new Error("You don't have the necessary authorization to get this data")
        }
      }
    )
  }

  convertToDate(volunteer: Volunteer[]) {
    volunteer.forEach(volunteer => {
      let time = volunteer.createdAt
      volunteer.createdAt = new Date(time[0], time[1]-1, time[2], time[3], time[4], time[5]);
    });
  }

  filter(query: string) {
    this.filteredVolunteers = (query) ? 
      this.volunteers.filter(v => v.email.toLowerCase().includes(query.toLowerCase())) : 
      this.volunteers;
  }
}
