import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'alertDialog',
  templateUrl: './alertdialog.component.html',
  styleUrl: './alertdialog.component.scss'
})
export class AlertDialogComponent {
  message: string = 'An unspecified error has occurred';
  icon: string = '';
  buttonText = 'Ok';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      message: string;
      icon: string;
      buttonText: string;
    },
    private dialogRef: MatDialogRef<AlertDialogComponent>
  ) {
    if (data?.icon) this.icon = data.icon;
    if (data?.message) this.message = data.message;
    if (data?.buttonText) this.buttonText = data.buttonText;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
