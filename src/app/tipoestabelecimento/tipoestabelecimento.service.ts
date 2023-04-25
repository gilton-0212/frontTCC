import { nome } from './../models/nome.model';
import { ITipoestabelecimento } from './ITipoestabelecimento';
import { Observable, take } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoestabelecimentoService {

  private readonly API = `${environment.API}/cadastros/tipo-estabelecimento`;


  constructor(private httpCliente: HttpClient) { }

  getTodosTiposestabelecimento(): Observable<ITipoestabelecimento[]>{

    return this.httpCliente.get<ITipoestabelecimento[]>(this.API);
  }

  getTipoEstabelecimentoId(id: number){
    return this.httpCliente.get<ITipoestabelecimento>(`${this.API}/${id}`);
  }

  getTipoEstabelecimentoPorNome(nome: string): Observable<nome[]> {

    const params = new HttpParams()
      .set('filter', nome);

    return this.httpCliente.get<nome[]>(`${this.API}/nome`, { params: params });
  }

  postCriarTipoEstabelecimento(tipoestabelecimento : ITipoestabelecimento){
    return this.httpCliente.post<ITipoestabelecimento>(this.API, tipoestabelecimento ).pipe(take(1));
  }



  putAtualizarTipoEstabelecimento(tipoestabelecimento : ITipoestabelecimento){
    return this.httpCliente.put<ITipoestabelecimento>(`${this.API}/${tipoestabelecimento.id}`, tipoestabelecimento).pipe(take(1));

  }

  deletarTipoEstabelecimento(id: number | undefined){
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
