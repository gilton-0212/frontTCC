import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Security/Service/auth.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { EstabelecimentoService } from 'src/app/estabelecimento/estabelecimento.service';
import { nome } from 'src/app/models/nome.model';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-venda-produto-list',
  templateUrl: './venda-produto-list.component.html',
  styleUrls: ['./venda-produto-list.component.css']
})
export class VendaProdutoListComponent implements OnInit {

  list!: any

  estabelecimento!: any;

  constructor(private login: AuthService, private produtoService: ProdutoService, private usuarioService: AuthService, private estabelecimentoService: EstabelecimentoService) {
   }

  async ngOnInit(): Promise<void> {
   await this.usuarioService.recuperarUsuario().then(async usuario => {
    await this.estabelecimentoService.getEstabelecimentoUsuario(usuario.id).then(res => {
      this.estabelecimento = res
    })
    })

    this.consultarProdutosVendidos();

  }

  consultarProdutosVendidos(){
    console.log(this.estabelecimento)
    this.produtoService.produtosVendidosEstabelecimento(this.estabelecimento!.id).subscribe(res => {
      this.list = res;
      console.log(res)
      console.log("teste")
    })
  }
  logout(){
    this.login.logout();
  }

}
