import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loadding = false;

  msg?: string;

  constructor(
    private service: AuthService,
    private router: Router,
  ) {}

  login(email: string, password: string) {
    this.msg = undefined;
    this.loadding = true;
    this.service
      .login(email, password)
      .subscribe({
        next: (result) => {
          this.router.navigate(['/home']);
        },
        error: (error) => (this.msg = error.error.error_description),
      })
      .add(() => (this.loadding = false));
  }

}
