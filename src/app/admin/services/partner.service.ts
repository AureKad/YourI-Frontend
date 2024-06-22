import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Partner } from '../../shared/models/partner';
import { UserService } from '../../authenticate/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private apiServerUrl = environment.apiBaseUrl
  
  constructor(private http: HttpClient, private userService: UserService) { }

  getPartners() {
    const token = this.userService.getAuthToken();
    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const headers = {headers: header};
      return this.http.get<Partner[]>(this.apiServerUrl + '/partners', headers)
    }
    throw new Error("No token has been provided");
  }

  becomePartners(partnerData: Partner) {
    return this.http.post(this.apiServerUrl + '/become/partners', partnerData);
  }
}
