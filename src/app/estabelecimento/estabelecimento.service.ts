
import { IEstabelecimento } from './IEstabelecimento';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { nome } from '../models/nome.model';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  private readonly API = `${environment.API}/cadastros/estabelecimento`;

  private readonly APIPUBLICA = `${environment.API}/public/estabelecimento`;

  constructor(private httpCliente : HttpClient) { }

  getTodosEstabelecimento(): Observable<IEstabelecimento[]>{

    return this.httpCliente.get<IEstabelecimento[]>(this.API);
  }

  getEstabelecimentoId(id: number){
    return this.httpCliente.get<IEstabelecimento>(`${this.API}/${id}`);
  }

  getEstabelecimentoUsuario(idUsuario: number){
    return this.httpCliente.get<nome>(`${this.API}/usuario/${idUsuario}`).toPromise();
  }

  postCriarEstabelecimento(estabelecimento : IEstabelecimento){
    return this.httpCliente.post<IEstabelecimento>(this.APIPUBLICA, estabelecimento).pipe(take(1));
  }

  putAtualizarEstabelecimento(estabelecimento : IEstabelecimento){
    return this.httpCliente.put<IEstabelecimento>(`${this.API}/${estabelecimento.id}`, estabelecimento).pipe(take(1));

  }

  deletarEstabelecimento(id: number | undefined){
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(take(1));
  }


}
