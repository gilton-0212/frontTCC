import { ICliente } from './../ICliente';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  cliente: ICliente[] = [];
  clienteSelecionado! : ICliente;

  constructor(

    private clienteService : ClienteService,
    private router : Router,

  ) { }

  ngOnInit(): void {

    this.clienteService.getTodosClientes().subscribe(dados => this.cliente = dados);

  }

  atualizarCliente(id: number){
    this.router.navigate(['cliente/editar', id])

  }

  deletarCliente(cat: ICliente){
    this.clienteSelecionado= cat;
    this.clienteService.deletarTipoCliente(this.clienteSelecionado.id).subscribe(
      sucesso =>  this.clienteService.getTodosClientes().subscribe(dados => this.cliente = dados)
    );
  }

}
