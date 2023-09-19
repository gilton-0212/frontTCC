import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductResumList } from "./productResum.model";
import { Filter } from "../models/filter";
import { Page } from "../models/page";

@Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
  
    private readonly API = `${environment.API}/cadastros/produto`;
  
    constructor(private httpCliente: HttpClient) { }
  
    getTodosProdutos(filter: Filter):Observable<Page<ProductResumList>>{
  
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
        return this.httpCliente.get<Page<ProductResumList>>(`${this.API}`, { params });
    
    }

    uploadImagem(formData: FormData): Observable<any>{
      return this.httpCliente.put<string>(`${environment.API}/cadastros/produto/uploadImagem`, formData);

    }
}