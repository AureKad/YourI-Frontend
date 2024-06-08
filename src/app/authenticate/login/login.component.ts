import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { loginData } from '../../shared/models/loginData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  })

  constructor(private userService: UserService, private router: Router) {

  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    let loginData = this.form.value as loginData;
    this.userService.login(loginData).subscribe(
      value => {
        this.userService.setAuthToken(value.token);
        this.router.navigate(['/']);
      }, 
      err => {
        if (err.status == 400) {
          throw new Error('There is no such combination of Email and Password');
        } 
        if (err.status == 403) {
          throw new Error('Email is not verified, a new token has been sent to your email')
        }
      }
    )
  }
}
