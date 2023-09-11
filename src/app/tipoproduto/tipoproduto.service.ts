import { Observable, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITipoproduto } from './ITipoproduto';
import { nome } from '../models/nome.model';

@Injectable({
  providedIn: 'root'
})
export class TipoprodutoService {

  private readonly API = `${environment.API}/cadastros/categoria-produto`;

  constructor(private httpCliente: HttpClient) { }

  getTodosTipoproduto(): Observable<ITipoproduto[]>{

    return this.httpCliente.get<ITipoproduto[]>(this.API);
  }

  getTipoprodutoId(id: number){
    return this.httpCliente.get<ITipoproduto>(`${this.API}/${id}`);
  }

  getTipoprodutoPorNome(nome: string): Observable<nome[]> {

    const params = new HttpParams()
      .set('filter', nome);

    return this.httpCliente.get<nome[]>(`${this.API}/nome`, { params: params });
  }

  postCriarTipoproduto(tipoproduto : ITipoproduto){
    return this.httpCliente.post<ITipoproduto>(this.API, tipoproduto ).pipe(take(1));
  }


  putAtualizarTipoproduto(tipoproduto : ITipoproduto){
    return this.httpCliente.put<ITipoproduto>(`${this.API}/${tipoproduto.id}`, tipoproduto).pipe(take(1));

  }

  deletarTipoproduto(id: number | undefined){
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(take(1));
  }



}
