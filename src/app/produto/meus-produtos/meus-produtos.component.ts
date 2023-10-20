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

  vendaRealizada?: boolean;

  filter: Filter = new Filter();
  itemsPerPage = 100;

  totalRecords = 0;

  loading = true;

  list: ProductResumList[] = [];

  options: number[] = [20, 40, 80, 120];

  displayModal?: boolean;

  carrinho?: any = [];

  quantidade: any = 1;

  constructor(private service: ProdutoService, private usuarioService: AuthService) { }

  ngOnInit(): void {
    this.search(new Filter());
  }

  searchPagination(event: LazyLoadEvent) {
    const pagina = (event.first ?? 0) / (event.rows ?? 0);

    this.itemsPerPage = event.rows ?? 20;
    this.filter.page = pagina;
    this.filter.itemsPerPage = this.itemsPerPage;
    this.filter.sortField = `${event.sortField ? event.sortField : 'id'}`;
    this.filter.sortOrder = event.sortOrder === 1 ? SortOrder.ASC : SortOrder.DESC;
    this.search(this.filter);
  }

  search(event: Filter) {
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
    this.loading = false;
  }

  showModalDialog() {
    this.displayModal = true;
  }

  adicionarProduto(produto: ProductResumList){
    this.usuarioService.recuperarUsuario().then(res =>{
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


