import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MissionComponent } from './about/mission/mission.component';
import { VisionComponent } from './about/vision/vision.component';
import { FactsComponent } from './about/facts/facts.component';
import { ValuesComponent } from './about/values/values.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, mapToCanActivate } from '@angular/router';
import { FactsCardComponent } from './about/facts/facts-cards/facts-card.component';
import { VisionCardsComponent } from './about/vision/vision-cards/vision-cards.component';
import { ProfileComponent } from './about/profile/profile.component';
import { BusinessFormComponent } from './about/business-form/business-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './about/forms/forms.component';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { HeaderComponent } from './shared/navbar/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { FooterComponent } from './shared/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './shared/alertdialog/alertdialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { loggedInGuard } from './shared/services/auth-guard.service';
import { ActivateAccountComponent } from './authenticate/register/activate-account/activate-account.component';
import { ResetPasswordComponent } from './authenticate/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './authenticate/forgot-password/forgot-password.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { CodeInputModule } from 'angular-code-input';
import { VerifyComponent } from './authenticate/forgot-password/verify/verify.component';
import { EnterCodeComponent } from './authenticate/forgot-password/enter-code/enter-code.component';
import { NewPasswordComponent } from './authenticate/forgot-password/new-password/new-password.component';
import { PartnerViewComponent } from './admin/partner-view/partner-view.component';
import { VolunteerViewComponent } from './admin/volunteer-view/volunteer-view.component';
import { adminGuard } from './shared/services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MissionComponent,
    VisionComponent,
    FactsComponent,
    ValuesComponent,
    AboutComponent,
    FactsCardComponent,
    VisionCardsComponent,
    ProfileComponent,
    BusinessFormComponent,
    FooterComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AlertDialogComponent,
    ActivateAccountComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifyComponent,
    EnterCodeComponent,
    NewPasswordComponent,
    PartnerViewComponent,
    VolunteerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectCountryModule.forRoot('en'),
    MatDialogModule,
    MatIconModule,
    MatButtonModule,

    RecaptchaV3Module,
    CodeInputModule,

    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent},
      { path: 'about/:comp', component: AboutComponent},
      { path: 'login', component: LoginComponent, canActivate: [loggedInGuard]},
      { path: 'login/reset/password', component: ForgotPasswordComponent, canActivate: [loggedInGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [loggedInGuard]},
      { path: 'register/activate-account', component: ActivateAccountComponent, canActivate: [loggedInGuard]},
      { path: 'admin/partners', component: PartnerViewComponent},
      { path: 'admin/volunteers', component: VolunteerViewComponent, canActivate: [adminGuard]}

    ])
  ],
  providers: [
    provideAnimations(),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
