import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() {}

  validateEmail() {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const emailValue = formGroup.get('email')?.value;
      if (emailValue.match(this.emailPattern)) {
        formGroup.get('email')?.setErrors(null);
        return null;
      } else {
        formGroup.get('email')?.setErrors({ emailValid: false });
        return { emailValid: false };
      }
    };
  }

  validateEqualLabels(label1: string, label2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(label1)?.value;
      const value2 = formGroup.get(label2)?.value;

      if (value1 === value2) {
        formGroup.get(label2)?.setErrors(null);
        return null;
      } else {
        formGroup.get(label2)?.setErrors({ passwordMatch: false });
        return { passwordMatch: false };
      }
    };
  }
}
