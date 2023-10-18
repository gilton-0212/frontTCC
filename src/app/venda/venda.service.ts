import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IVenda, VendaResum } from "./IVenda";
import { Observable, take } from "rxjs";
import { Filter } from "../models/filter";
import { Page } from "../models/page";

@Injectable({
    providedIn: 'root'
  })

  export class VendaService {

    private readonly API = `${environment.API}/cadastros/venda`;
  
    constructor(private httpCliente: HttpClient) { }

    getTodasVendas(filter: Filter):Observable<Page<VendaResum>>{
  
      let params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString())
      .set('sort', `${filter.sortField},${filter.sortOrder}`);


    let search = '';
    filter.filtersPes.forEach(f => {
      search += `${f.name}${f.relationalOperator}${f.value},`;
    });

    if (filter.filtersPes.length > 0) {
      search = search.substring(0, (search.length - 1));
      params = params.append('search', search);
    }
      return this.httpCliente.get<Page<VendaResum>>(`${this.API}`, { params });
  
  }

    postCriarVenda(produto : IVenda){
        return this.httpCliente.post<IVenda>(this.API, produto).pipe(take(1));
      }

  }