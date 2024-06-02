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
}
