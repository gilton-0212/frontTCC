import { Component, OnInit } from '@angular/core';
import { Filter, SortOrder } from 'src/app/models/filter';
import { ProductResumList } from '../productResum.model';
import { LazyLoadEvent } from 'primeng/api';
import { ProdutoService } from '../produto.service';
import { Page } from 'src/app/models/page';
import { AuthService } from 'src/app/Security/Service/auth.service';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.css']
})
export class MeusProdutosComponent implements OnInit {

  estabelecimento!: any;

  list!: any

  constructor(private service: ProdutoService, private usuarioService: AuthService) { }

  async ngOnInit(): Promise<void> {
    await this.usuarioService.recuperarUsuario().then(res => {
       this.estabelecimento = res;
     })

     this.consultarProdutosVendidos();

   }

   consultarProdutosVendidos(){
    console.log(this.estabelecimento)
    this.service.produtosPorEstabelecimento(this.estabelecimento!.id).subscribe(res => {
      this.list = res;
      console.log(res)
    })
  }


}


