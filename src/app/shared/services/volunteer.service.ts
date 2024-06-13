import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Volunteer } from '../models/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private apiServerUrl = environment.apiBaseUrl
  
  constructor(private http: HttpClient, private userService: UserService) { }

  getVolunteers() {
    const token = this.userService.getAuthToken();
    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const headers = {headers: header};
      return this.http.get<Volunteer[]>(this.apiServerUrl + '/volunteers', headers)
    }
    throw new Error("No token has been provided");
  }
}
