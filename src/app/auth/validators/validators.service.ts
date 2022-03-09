import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  validateEmail() {
    const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const emailValue = formGroup.get('email')?.value;
      if (emailValue.match(emailPattern)) {
        formGroup.get('email')?.setErrors(null);
        return null;
      } else {
        formGroup.get('email')?.setErrors({ emailValid: false });
        return { emailValid: false };
      }
    };
  }

  validatePasswordFormat() {
    const passwordPattern: string =
      '^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$';

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordValue = formGroup.get('password')?.value;

      if (passwordValue.match(passwordPattern)) {
        formGroup.get('password')?.setErrors(null);
        return null;
      } else {
        formGroup.get('password')?.setErrors({ passwordFormat: 'invalid' });
        return { passwordFormat: 'invalid' };
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
