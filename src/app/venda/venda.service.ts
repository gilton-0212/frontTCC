import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IVenda } from "./IVenda";
import { take } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class VendaService {

    private readonly API = `${environment.API}/cadastros/venda`;
  
    constructor(private httpCliente: HttpClient) { }

    postCriarVenda(produto : IVenda){
        return this.httpCliente.post<IVenda>(this.API, produto).pipe(take(1));
      }

  }