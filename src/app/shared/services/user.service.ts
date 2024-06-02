import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { loginData } from '../models/loginData';
import { registrationData } from '../models/registrationData';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl
  
  constructor(private http: HttpClient) { }

  login(authData: loginData) {
    return this.http.post<User>(this.apiServerUrl + '/auth/authenticate', authData)
  }

  register(authData: registrationData) {
    return this.http.post<User>(this.apiServerUrl + '/auth/register/user', authData)
  }
}