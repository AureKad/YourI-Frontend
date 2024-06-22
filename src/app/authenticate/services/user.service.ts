import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../../shared/models/loginData';
import { registrationData } from '../../shared/models/registrationData';
import { User } from '../../shared/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl
  
  constructor(private http: HttpClient) {}


  login(authData: loginData) {
    return this.http.post<User>(this.apiServerUrl + '/login', authData);
  }

  logout() {
    this.setAuthToken(null);
  }

  register(authData: registrationData) {
    return this.http.post(this.apiServerUrl + '/register', authData);
    
  }

  activateAccount(token: string) {
    return this.http.get<void>(this.apiServerUrl + '/activate-account?token='+token);
  }

  resetPasswordSendMail(email: string) {
    return this.http.get<void>(this.apiServerUrl + '/send-recovery-email?email='+email);
  }

  activatePasswordRecovery(token: string, email: string) {
    return this.http.get<void>(this.apiServerUrl + '/activate-password-recovery?token='+token+'&email='+email);
  }

  changePassword(authData: loginData) {
    return this.http.post(this.apiServerUrl + '/change-password', authData);
  }

  getAuthToken(): string | null {
    return localStorage.getItem("auth_token")
  }

  setAuthToken(token: string | null): void {
    if (token != null) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }

}