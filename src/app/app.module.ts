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
import { VolunteerFormComponent } from './about/volunteer-form/volunteer-form.component';
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
import { ActivateAccountComponent } from './authenticate/activate-account/activate-account.component';

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
    VolunteerFormComponent,
    BusinessFormComponent,
    FooterComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AlertDialogComponent,
    ActivateAccountComponent
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
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent},
      { path: 'login', component: LoginComponent, canActivate: [loggedInGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [loggedInGuard]},
      { path: 'activate-account', component: ActivateAccountComponent},
    ])
  ],
  providers: [
    provideAnimations(),
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
