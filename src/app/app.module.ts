import { NgModule } from '@angular/core';
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
import { RouterModule } from '@angular/router';
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
    HeaderComponent
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
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
    ])
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
