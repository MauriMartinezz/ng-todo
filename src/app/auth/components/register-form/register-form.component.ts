import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.vs.validateEmail(),
        this.vs.validateEqualLabels('password', 'confirmPassword'),
        this.vs.validatePasswordFormat(),
      ],
    }
  );

  constructor(private fb: FormBuilder, private vs: ValidatorsService) {}

  ngOnInit(): void {}

  labelIsValid(label: string): boolean | undefined {
    return (
      this.registerForm.get(label)?.touched &&
      this.registerForm.get(label)?.invalid
    );
  }

  sendForm() {
    console.log(this.registerForm);
  }
}
