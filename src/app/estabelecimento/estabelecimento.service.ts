
import { IEstabelecimento } from './IEstabelecimento';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  private readonly API = `${environment.API}/cadastros/estabelecimento`;

  constructor(private httpCliente : HttpClient) { }

  getTodosEstabelecimento(): Observable<IEstabelecimento[]>{

    return this.httpCliente.get<IEstabelecimento[]>(this.API);
  }

  getEstabelecimentoId(id: number){
    return this.httpCliente.get<IEstabelecimento>(`${this.API}/${id}`);
  }

  postCriarEstabelecimento(estabelecimento : IEstabelecimento){
    return this.httpCliente.post<IEstabelecimento>(this.API, estabelecimento).pipe(take(1));
  }

  putAtualizarEstabelecimento(estabelecimento : IEstabelecimento){
    return this.httpCliente.put<IEstabelecimento>(`${this.API}/${estabelecimento.id}`, estabelecimento).pipe(take(1));

  }

  deletarEstabelecimento(id: number | undefined){
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(take(1));
  }


}
