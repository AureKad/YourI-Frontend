import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static passwordsShouldMatch(control: AbstractControl)  {
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')

    if (password!.value !== confirmPassword!.value) 
      return { passwordsShouldMatch: true };
    return null;
    
  }

  static donationNotAppropriateAmount(control: AbstractControl) {
    let amount = control.get('amount')

    if (amount!.value < 1 || amount!.value > 10000)
      return { donationNotAppropriateAmount: true };
    return null;
  }
}
