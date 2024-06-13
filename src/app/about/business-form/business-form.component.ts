import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Partner } from '../../shared/models/partner';
import { PartnerService } from '../../shared/services/partner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../shared/alertdialog/alertdialog.component';

@Component({
  selector: 'business-form',
  templateUrl: './business-form.component.html',
  styleUrl: './business-form.component.scss'
})
export class BusinessFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    company: new FormControl('', Validators.required),
    optionalText: new FormControl('', )
  })

  constructor(private partnerService: PartnerService, public dialog: MatDialog) {}

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get company() {
    return this.form.get('company');
  }

  get optionalText() {
    return this.form.get('optionalText');
  }

  save() {
    let partnerData = Object.assign({}, this.form.value) as Partner;
    this.partnerService.becomePartners(partnerData).subscribe(
      value => {
        this.dialog.open(AlertDialogComponent, {
          data: {
            message: 'Form successfully sent'
          }
        })
      },
      error => {
        console.log(error);
        throw new Error('Something went wrong')
      }
    )
  }
}
