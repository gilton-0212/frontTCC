import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendaResum } from '../IVenda';
import { Filter } from 'src/app/models/filter';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  vendas!: any []

  status = [
    { label: 'PREPARAR', value: 'PREPARAR' },
    { label: 'SEPARADO', value: 'SEPARADO' },
    { label: 'COLETADO', value: 'COLETADO' },
    { label: 'ENTREGUE', value: 'ENTREGUE' },

  ]

  status1 = [
    { label: 'MOTO BOY1', value: 'MOTO BOY1' },
    { label: 'MOTO BOY2', value: 'MOTO BOY2' },
    { label: 'MOTO BOY3', value: 'MOTO BOY3' },
    { label: 'MOTO BOY4', value: 'MOTO BOY4' },

  ]

  situacao = [
    { label: 'ATIVO', value: 'ATIVO' },
    { label: 'CANCELADO', value: 'CANCELADO' },

  ]

  formulario!: FormGroup;

  constructor( private vendaService: VendaService, private form: FormBuilder,) { }

  ngOnInit(): void {
    this.consultarTotalVendas();
  }

  consultarTotalVendas(){
    this.vendaService.consultarVendas().subscribe(res => {
      this.vendas = res
    })
  }

  mudarStatusVenda(venda: any){
    console.log('venda => ', venda)
    this.vendaService.atualizarStatusVenda(venda.id, venda.status).subscribe(res => {
      alert('Status alterado com Sucesso!')
    })
  }

}
