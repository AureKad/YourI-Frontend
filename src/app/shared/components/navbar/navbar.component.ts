import { Component, OnInit } from '@angular/core';
import { JWTTokenService } from '../../../authenticate/services/jwttoken.service';
import { Router } from '@angular/router';
import { JWT } from '../../models/jwt';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  jwtUser!: JWT | null;

  constructor(private jwtTokenService: JWTTokenService, private router: Router) {

  }

  ngOnInit(): void {
    this.jwtUser = this.jwtTokenService.getDecodedToken();
  }

  logout() {
    this.jwtTokenService.deleteToken();
    this.jwtUser = null;
  }

}
