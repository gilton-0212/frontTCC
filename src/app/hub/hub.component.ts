import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../estabelecimento/estabelecimento.service';
import { VendaService } from '../venda/venda.service';
import { Filter } from '../models/filter';
import { ClienteService } from '../cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  usuario! : any
  quantidadeEstabelecimento: number = 0;
  quantidadeVendas: number = 0;
  quantidadeUsuarios: number = 0;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private vendaService: VendaService,
    private clientesService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.consultarTotalEstabelecimento();
    this.consultarTotalVendas();
    this.consultarUsuarios();
  }


  consultarTotalEstabelecimento(){
    this.estabelecimentoService.getTodosEstabelecimento().subscribe(res => {
      this.quantidadeEstabelecimento = res.length
    })
  }
  
  consultarTotalVendas(){
    this.vendaService.getTodasVendas(new Filter()).subscribe(res => {
      this.quantidadeVendas = res.totalElements
    })
  }

  consultarUsuarios(){
    this.clientesService.getTodosClientes().subscribe(res => {
      this.quantidadeUsuarios = res.length;
    })
  }

  irEstabelecimento(){
    this.router.navigate(['/estabelecimento']);
  }

  irCliente(){
    this.router.navigate(['/cliente']);
  }

  irVendas(){
    this.router.navigate(['/venda-lista'])
  }

}
