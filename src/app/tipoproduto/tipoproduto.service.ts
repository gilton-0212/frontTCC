import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITipoproduto } from './ITipoproduto';

@Injectable({
  providedIn: 'root'
})
export class TipoprodutoService {

  private readonly API = `${environment.API}/tipoproduto`;

  constructor(private httpCliente: HttpClient) { }

  getTodosTipoproduto(): Observable<ITipoproduto[]>{

    return this.httpCliente.get<ITipoproduto[]>(this.API);
  }

}
