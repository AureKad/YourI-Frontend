import { Component, OnInit } from '@angular/core';
import { Partner } from '../../../shared/models/partner';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrl: './partner-view.component.scss'
})
export class PartnerViewComponent implements OnInit{
  partners!: Partner[];
  filteredPartners!: Partner[];
  selectedPartner: any;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe(
      result => {
        let res = result.reverse();
        this.convertToDate(res)
        this.partners = this.filteredPartners = res
      },
      err => {
        console.log(err)
        if (err.status == 403) {
          throw new Error("You don't have the necessary authorization to get this data")
        }
      }
    )
  }

  convertToDate(partners: Partner[]) {
    partners.forEach(partner => {
      let time = partner.createdAt
      partner.createdAt = new Date(time[0], time[1]-1, time[2], time[3], time[4], time[5]);
    });
  }

  toggleClass(el: any) {
    el.className = (el.className === 'shrinked') ? 'enlarged' : 'shrinked'
  }

  filter(query: string) {
    this.filteredPartners = (query) ? 
      this.partners.filter(p => p.email.toLowerCase().includes(query.toLowerCase())) : 
      this.partners;
  }
}
