import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authenticate/components/login/login.component';
import { RegisterComponent } from './authenticate/components/register/register.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { loggedInGuard } from './shared/services/auth-guard.service';
import { ActivateAccountComponent } from './authenticate/components/register/activate-account/activate-account.component';
import { ForgotPasswordComponent } from './authenticate/components/forgot-password/forgot-password.component';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { VolunteerViewComponent } from './admin/components/volunteer-view/volunteer-view.component';
import { adminGuard } from './shared/services/admin-auth-guard.service';
import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { AdminModule } from './admin/admin.module';
import { DonateComponent } from './donate/components/donate/donate.component';
import { DonateModule } from './donate/donate.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/services/loading.interceptor';
import { LogoutInterceptor } from './shared/services/logout.interceptor';
import { PartnerViewComponent } from './admin/components/partner-view/partner-view.component';
import { SuccessComponent } from './donate/components/donate/donation-success/success.component';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    AboutModule,
    SharedModule,
    AdminModule,
    AuthenticateModule,
    DonateModule,


    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent},
      { path: 'login', component: LoginComponent, canActivate: [loggedInGuard]},
      { path: 'login/reset/password', component: ForgotPasswordComponent, canActivate: [loggedInGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [loggedInGuard]},
      { path: 'register/activate-account', component: ActivateAccountComponent, canActivate: [loggedInGuard]},
      { path: 'admin/partners', component: PartnerViewComponent, canActivate: [adminGuard]},
      { path: 'admin/volunteers', component: VolunteerViewComponent, canActivate: [adminGuard]},
      { path: 'donate', component: DonateComponent},
      { path: 'donate/success', component: SuccessComponent}
    ],
    {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  providers: [
    provideAnimations(),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
