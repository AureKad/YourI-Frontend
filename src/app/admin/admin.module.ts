import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VolunteerViewComponent } from './components/volunteer-view/volunteer-view.component';
import { PartnerViewComponent } from './components/partner-view/partner-view.component';


@NgModule({
  declarations: [
    PartnerViewComponent,
    VolunteerViewComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
