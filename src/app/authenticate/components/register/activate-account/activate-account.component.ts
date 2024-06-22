import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { JWTTokenService } from '../../../services/jwttoken.service';
import { User } from '../../../../shared/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  success: boolean = false;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) {

  }


  onCodeCompleted(token: string) {
    this.submitted = true;
    this.userService.activateAccount(token).subscribe(
      value => {
        this.success = true;
      },
      error => {
        this.success = false;
      }
    )

  }

}
