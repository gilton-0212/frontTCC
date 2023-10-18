import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendaResum } from '../IVenda';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  vendas!: VendaResum []

  constructor( private vendaService: VendaService,) { }

  ngOnInit(): void {
    this.consultarTotalVendas();
  }

  consultarTotalVendas(){
    this.vendaService.getTodasVendas(new Filter()).subscribe(res => {
      this.vendas = res.content
    })
  }

}
