import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../Security/login/login.component';
import { AuthService } from '../Security/Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario!: any;

  constructor(private login: AuthService) { }

  ngOnInit(): void {
    this.login.recuperarUsuario().then(res => {
      this.usuario = res;
    })
  }

  logout(){
    this.login.logout();
  }
}
