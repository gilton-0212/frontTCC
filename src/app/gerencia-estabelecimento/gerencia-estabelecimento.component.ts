import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Security/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia-estabelecimento',
  templateUrl: './gerencia-estabelecimento.component.html',
  styleUrls: ['./gerencia-estabelecimento.component.css']
})
export class GerenciaEstabelecimentoComponent implements OnInit {

  usuario!: any;

  constructor(private login: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.login.recuperarUsuario().then(res=>{
      this.usuario = res;

    })
  }

    logout(){
      this.login.logout();
    }

    irProdutosVendidos(){
      this.router.navigate(['/produtos-vendidos']);
    }

    irProdutos(){
      this.router.navigate(['/meusprodutos']);
    }
  }
