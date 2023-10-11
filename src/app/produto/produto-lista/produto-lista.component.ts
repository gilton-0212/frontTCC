import { Component, OnInit } from '@angular/core';
import { Filter, SortOrder } from 'src/app/models/filter';
import { ProductResumList } from '../productResum.model';
import { LazyLoadEvent } from 'primeng/api';
import { ProdutoService } from '../produto.service';
import { Page } from 'src/app/models/page';
import { AuthService } from 'src/app/Security/Service/auth.service';
import { IVenda } from 'src/app/venda/IVenda';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {


  vendaRealizada?: boolean;

  filter: Filter = new Filter();
  itemsPerPage = 100;

  totalRecords = 0;

  loading = true;

  list: ProductResumList[] = new Array<ProductResumList>();

  options: number[] = [20, 40, 80, 120];

  displayModal = false;

  carrinho?: any = [];

  quantidade: number = 0;

  valorTotal: number = 0;

  

  constructor(private service: ProdutoService, private usuarioService: AuthService) { }

  ngOnInit(): void {
    console.log('list => ', this.list);
    this.search(new Filter());
  }


  searchPagination(event: LazyLoadEvent) {
    console.log('evento', event)
    const pagina = (event.first ?? 0) / (event.rows ?? 0);

    this.itemsPerPage = event.rows ?? 20;
    this.filter.page = pagina;
    this.filter.itemsPerPage = this.itemsPerPage;
    this.filter.sortField = `${event.sortField ? event.sortField : 'id'}`;
    this.filter.sortOrder = event.sortOrder === 1 ? SortOrder.ASC : SortOrder.DESC;
    this.search(this.filter);
  }

  search(event: Filter) {
    console.log(event)
    this.loading = true;
    this.service.getTodosProdutos(event)
      .subscribe({
        next: this.handlerResultResponse.bind(this),
        //error: this.handleError.bind(this)
      });
  }

  private handlerResultResponse(result: Page<ProductResumList>) {
    this.totalRecords = result.totalElements;
    this.list = result.content;

    this.list.forEach(product => product.quantidade = 1);

    this.loading = false;
  }

  showModalDialog() {
    this.displayModal = true;
    // this.carrinho!.forEach((element: { id: any; nome: any; quantidade: number; preco: number; }) => {
    //   this.item!.produto!.id = element.id;
    //   this.item!.produto!.nome = element.nome;
    //   this.item!.quantidade = element.quantidade;
    //   this.valorTotal = this.valorTotal! + (element.preco * element.quantidade);
    //   this.venda.itens.push(this.item!);
    // });

    // //this.venda.cliente.id = this.idUsuario!;
    // this.venda.dataVenda = new Date().toDateString();
    // this.venda.valorTotal = this.valorTotal;

    // console.log('venda: ', this.venda)
  
  }

  adicionarProduto(produto: ProductResumList){
    this.usuarioService.recuperarUsuario().subscribe(res =>{
      console.log(res)
    })
    this.carrinho.push(produto);
     alert('Produto Adicionado ao Carrinho')

  }

  ConcluirVenda(event: boolean){
    this.displayModal = false
    this.carrinho = [];
    console.log(event)
  }
}
