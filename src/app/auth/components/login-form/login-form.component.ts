import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  error!: any;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly as: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.as
      .login('user@mail.com', '123456789')
      .then((m) => {
        this.error = '';
        this.router.navigate(['/home']);
        console.log(m);
      })
      .catch((e) => {
        this.error = 'user or password are incorrect';
      });
    console.log(this.loginForm);
  }
}
