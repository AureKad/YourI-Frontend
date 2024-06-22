import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { loginData } from '../../../shared/models/loginData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  })
  invalidAttemptCounter!: number;

  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    
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
        this.invalidAttemptCounter = 0;
        this.userService.setAuthToken(value.token);
        this.router.navigate(['/']);
      }, 
      err => {
        this.invalidAttemptCounter +=1;
        if (err.status == 400) {
          throw new Error('There is no such combination of Email and Password');
        } 
        if (err.status == 403) {
          throw new Error('Email is not verified, a new token has been sent to your email')
        }
        if (err.status = 429) {
          throw new Error('Too many unsuccessful requests, try again later or reset your password')
        }
      }
    )
  }
}
