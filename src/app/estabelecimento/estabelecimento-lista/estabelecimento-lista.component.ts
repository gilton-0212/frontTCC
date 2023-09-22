import { ITipoestabelecimento } from './../../tipoestabelecimento/ITipoestabelecimento';
import { EstabelecimentoService } from './../estabelecimento.service';
import { Router } from '@angular/router';
import { TipoestabelecimentoService } from './../../tipoestabelecimento/tipoestabelecimento.service';
import { TipoestabelecimentoRoutes } from './../../tipoestabelecimento/tipoestabelecimento.routing';
import { Component, OnInit } from '@angular/core';
import { IEstabelecimento } from '../IEstabelecimento';

@Component({
  selector: 'app-estabelecimento-lista',
  templateUrl: './estabelecimento-lista.component.html',
  styleUrls: ['./estabelecimento-lista.component.css']
})
export class EstabelecimentoListaComponent implements OnInit {

  estabelecimento: IEstabelecimento[] = [];
  estabelecimentosSelecionado! : IEstabelecimento;
  tipoestabelecimento!: ITipoestabelecimento[] [];


  constructor(

    private estabelecimentoService : EstabelecimentoService,
    private router : Router,

  ) { }

  ngOnInit():

  void {
    this.estabelecimentoService.getTodosEstabelecimento().subscribe(dados => this.estabelecimento = dados);
  }

  atualizarEstabelecimento(id: number){
    this.router.navigate(['estabelecimento/editar', id])

  }

  deletarEstabelecimento(est: IEstabelecimento){
    this.estabelecimentosSelecionado = est;
    this.estabelecimentoService.deletarEstabelecimento(this.estabelecimentosSelecionado.id).subscribe(
      sucesso => {alert('Estabeleciemnto Removido com Sucesso'); this.estabelecimentoService.getTodosEstabelecimento().subscribe(dados => this.estabelecimento = dados)
  });
  }

}
