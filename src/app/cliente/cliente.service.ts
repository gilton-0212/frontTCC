import { HttpClient } from '@angular/common/http';
import { ICliente } from './ICliente';
import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.API}/cadastros/cliente`;

  private readonly APIPUBLICA = `${environment.API}/public/cliente`;

  constructor(private httpCliente: HttpClient) { }

  getTodosClientes(): Observable<ICliente[]>{

    return this.httpCliente.get<ICliente[]>(this.API);
  }

  getClienteId(id: number){
    return this.httpCliente.get<ICliente>(`${this.API}/${id}`);
  }

  postCriarCliente(cliente : ICliente){
    return this.httpCliente.post<ICliente>(this.APIPUBLICA, cliente ).pipe(take(1));
  }

  putAtualizarCliente(cliente : ICliente){
    return this.httpCliente.put<ICliente>(`${this.API}/${cliente.id}`, cliente).pipe(take(1));

  }

  deletarTipoCliente(id: number | undefined){
    return this.httpCliente.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
