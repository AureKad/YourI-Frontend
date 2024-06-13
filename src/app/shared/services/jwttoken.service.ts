import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { UserService } from './user.service';
import { JWT } from '../models/jwt';

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  constructor(private userService: UserService) { }

  deleteToken() {
    this.userService.setAuthToken(null);
  }

  getDecodeToken(): JWT | null{
    let jwtToken = this.userService.getAuthToken();
    if (jwtToken != null) {
      return jwtDecode<JWT>(jwtToken);
    } 
    return null;
    
  }

  isLoggedIn(): boolean {
    if (this.userService.getAuthToken()) {
      return true;
    } 
    return false;
  }

}
