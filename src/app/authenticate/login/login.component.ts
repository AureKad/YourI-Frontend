import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  save() {
    let login = this.form.value;
    console.log(login);
  }
}
