import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
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
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './about/forms/forms.component';

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
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent}
    ])
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
