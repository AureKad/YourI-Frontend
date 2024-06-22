import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'verify-for-password-reset',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {
  @Output('verified') verified = new EventEmitter<string>();

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  })
  success: boolean = false;

  constructor(private userService: UserService) {
  
  }

  get email() {
    return this.form.get('email');
  }

  sendRequest() {
    let data = this.form.value;
    if (data.email) {
      this.userService.resetPasswordSendMail(data.email).subscribe(
        () => {
          this.success = true;
          if (data.email)
            this.verified.emit(data.email);
        },
        err => {
          this.success = false;
          throw new Error("Email does not exist");
        }
      );
    } else {
      throw new Error("No token was provided in the query params")
    };
  }
}
