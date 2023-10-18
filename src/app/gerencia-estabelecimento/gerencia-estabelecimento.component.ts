import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Security/Service/auth.service';

@Component({
  selector: 'app-gerencia-estabelecimento',
  templateUrl: './gerencia-estabelecimento.component.html',
  styleUrls: ['./gerencia-estabelecimento.component.css']
})
export class GerenciaEstabelecimentoComponent implements OnInit {

  usuario!: any;

  constructor(private login: AuthService) { }

  ngOnInit(): void {
    this.login.recuperarUsuario().subscribe(res=>{
      this.usuario = res;
      console.log(this.usuario);

    })
  }

    logout(){
      this.login.logout();
    }
  }
