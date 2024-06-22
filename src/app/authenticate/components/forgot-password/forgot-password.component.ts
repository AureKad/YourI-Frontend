import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  })
  emailSent = false;
  codeCorrect = false;
  email!: string;
  

  constructor(private userService: UserService, private router: Router) {
  
  }


  emailDone(email: string) {
    this.emailSent = true;
    this.email = email;
  }

  codeVerified() {
    this.codeCorrect = true;
  }

  
}
