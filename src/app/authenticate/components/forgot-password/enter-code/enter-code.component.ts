import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'enter-password-code',
  templateUrl: './enter-code.component.html',
  styleUrl: './enter-code.component.scss'
})
export class EnterCodeComponent {
  @Input("email") email!: string;
  @Output("codeEntered") codeEntered = new EventEmitter;

  success: boolean = false;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) {

  }


  onCodeCompleted(token: string) {
    this.submitted = true;
    this.userService.activatePasswordRecovery(token, this.email).subscribe(
      value => {
        this.codeEntered.emit();
      },
      error => {
        this.success = false;
      }
    )

  }
}
