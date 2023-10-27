import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Security/Service/auth.service';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { EstabelecimentoService } from '../estabelecimento/estabelecimento.service';

@Component({
  selector: 'app-gerencia-estabelecimento',
  templateUrl: './gerencia-estabelecimento.component.html',
  styleUrls: ['./gerencia-estabelecimento.component.css']
})
export class GerenciaEstabelecimentoComponent implements OnInit {

  usuario!: any;

  estabelecimento!: any;

  quantidadeVendida!: number;

  quantidadeProduto!: number;

  constructor(private login: AuthService,
     private router: Router,
     private produtoService: ProdutoService,
     private estabelecimentoService: EstabelecimentoService) { }

  async ngOnInit(): Promise<void> {
    this.login.recuperarUsuario().then(res=>{
      this.usuario = res;

    })

    await this.login.recuperarUsuario().then(async usuario => {
      await this.estabelecimentoService.getEstabelecimentoUsuario(usuario.id).then(res => {
        this.estabelecimento = res
      })
     })

     this.consultarTotaisProdutos();
     this.consultarTotaisProdutosVendidos();
  }

  consultarTotaisProdutos(){
    this.produtoService.produtosPorEstabelecimento(this.estabelecimento!.id).subscribe(res => {
      console.log('quantidade Produto: ', res)
      this.quantidadeProduto = res.length;

    })
  }

  consultarTotaisProdutosVendidos(){
    this.produtoService.produtosVendidosEstabelecimento(this.estabelecimento!.id).subscribe(res => {
      console.log('quantidade vendida: ', res)
      this.quantidadeVendida = res.length;

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
