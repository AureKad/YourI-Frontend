import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/services/validation.service';
import { registrationData } from '../../shared/models/registrationData';
import { UserService } from '../../shared/services/user.service';
import { JWTTokenService } from '../../shared/services/jwttoken.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../shared/alertdialog/alertdialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', ),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    country: new FormControl<any>('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {
    validators: ValidationService.passwordsShouldMatch
  })

  constructor(private userService: UserService, private router: Router) {}


  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get country() {
    return this.form.get('country');
  }


  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  register() {
    /*

    let headers = new HttpHeaders();
    if (this.getAuthToken !== null) {
      headers = headers.set("Authorization", "Bearer " + this.getAuthToken())
    }
*/
    let register = this.form.value;
    register.country = register.country.name;
    delete register['confirmPassword'];
    let registerData = Object.assign({}, register) as registrationData;
    console.log(registerData);
    this.userService.register(registerData).subscribe(() => 
      {
        this.router.navigate(["register","activate-account"])
      },
      err => {
        if (err.status == 400) {
          throw new Error('An account with this email already exists');
        } 
        if (err.status == 403) {
          throw new Error('Please reselect the Country');
        }
      }
    );
  }

}

