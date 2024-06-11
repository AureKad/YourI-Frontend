import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { ValidationService } from '../../../shared/services/validation.service';
import { loginData } from '../../../shared/models/loginData';

@Component({
  selector: 'enter-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent {
  @Input('email') email!: string;
  form = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {
    validators: ValidationService.passwordsShouldMatch
  })

  constructor(private userService: UserService, private router: Router) {}


  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  changePassword() {
    let pw = this.form.value.password
    if (pw) {
      let data: loginData = {
        email: this.email,
        password: pw
      }
      this.userService.changePassword(data).subscribe(
        value => {
          this.router.navigate(["login"]);
        },  
        error => {
          if (error.status == 404) {
            throw new Error("Email not found")
          }
          if (error.status == 403) {
            throw new Error("Token has been not activated, please try again by refreshing")
          }
        }
      );

    }
  }

}
