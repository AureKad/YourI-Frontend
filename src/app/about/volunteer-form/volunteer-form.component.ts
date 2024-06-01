import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrl: './volunteer-form.component.scss'
})
export class VolunteerFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    country: new FormControl('', Validators.required),
    optionalText: new FormControl('', Validators.required)
  })

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

  get optionalText() {
    return this.form.get('additionalText');
  }

  save() {
    let volunteer = this.form.value;
    console.log(volunteer);
  }
}
