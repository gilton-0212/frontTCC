import { Component, OnInit } from '@angular/core';
import { Filter, SortOrder } from 'src/app/models/filter';
import { ProductResumList } from '../productResum.model';
import { LazyLoadEvent } from 'primeng/api';
import { ProdutoService } from '../produto.service';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  filter: Filter = new Filter();
  itemsPerPage = 20;

  totalRecords = 0;

  loading = true;

  list: ProductResumList[] = [];

  options: number[] = [20, 40, 80, 120];

  constructor( private service: ProdutoService,) { }

  ngOnInit(): void {
    this.search(new Filter());
  }


  searchPagination(event: LazyLoadEvent) {
    console.log('evento',event)
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
    this.loading = false;
  }
}
