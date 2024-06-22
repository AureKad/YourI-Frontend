import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { BusinessFormComponent } from './components/business-form/business-form.component';
import { FactsCardComponent } from './components/facts/facts-cards/facts-card.component';
import { FactsComponent } from './components/facts/facts.component';
import { MissionComponent } from './components/mission/mission.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValuesComponent } from './components/values/values.component';
import { VisionComponent } from './components/vision/vision.component';
import { SharedModule } from '../shared/shared.module';
import { FormsComponent } from './components/forms/forms.component';



@NgModule({
  declarations: [
    MissionComponent,
    VisionComponent,
    FactsComponent,
    ValuesComponent,
    AboutComponent,
    FactsCardComponent,
    ProfileComponent,
    BusinessFormComponent,
    FormsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AboutModule { }
