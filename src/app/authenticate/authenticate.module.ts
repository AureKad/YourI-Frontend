import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterCodeComponent } from './components/forgot-password/enter-code/enter-code.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/forgot-password/new-password/new-password.component';
import { VerifyComponent } from './components/forgot-password/verify/verify.component';
import { LoginComponent } from './components/login/login.component';
import { ActivateAccountComponent } from './components/register/activate-account/activate-account.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { CodeInputModule } from 'angular-code-input';
import { RecaptchaV3Module } from 'ng-recaptcha';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    ForgotPasswordComponent,
    VerifyComponent,
    EnterCodeComponent,
    NewPasswordComponent,
  ],
  imports: [
    SharedModule,
    MatSelectCountryModule.forRoot('en'),
    RecaptchaV3Module,
    CodeInputModule,
  ]
})
export class AuthenticateModule { }
