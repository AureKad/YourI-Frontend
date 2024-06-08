import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { JWTTokenService } from '../../shared/services/jwttoken.service';
import { User } from '../../shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit {

  token?: string;
  success: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
  });
  }

  ngOnInit() {
    if (this.token != null) {
      this.userService.activateAccount(this.token).subscribe(
        () => {
          this.success = true
        },
        err => {
          this.success = false;
          throw new Error("Invalid Token");
        }
      );
    } else {
      throw new Error("No token was provided in the query params")
    }

  }

}
