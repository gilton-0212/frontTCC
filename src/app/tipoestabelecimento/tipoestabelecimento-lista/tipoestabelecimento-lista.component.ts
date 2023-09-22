import { Router } from '@angular/router';
import { TipoestabelecimentoService } from './../tipoestabelecimento.service';
import { ITipoestabelecimento } from './../ITipoestabelecimento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipoestabelecimento-lista',
  templateUrl: './tipoestabelecimento-lista.component.html',
  styleUrls: ['./tipoestabelecimento-lista.component.css']
})
export class TipoestabelecimentoListaComponent implements OnInit {

  tipoestabelecimento: ITipoestabelecimento[] = [];
  tipoestabelecimentosSelecionado! : ITipoestabelecimento;


  constructor(
    private tipoestabelecimentoservice : TipoestabelecimentoService,
    private router : Router,

  ) { }

  ngOnInit(): void {
    this.tipoestabelecimentoservice.getTodosTiposestabelecimento().subscribe(dados => this.tipoestabelecimento = dados);
  }

  atualizarTipoEstabelecimento(id: number){
    this.router.navigate(['tipoestabelecimento/editar', id])

  }

  deletarTipoEstabelecimento(cat: ITipoestabelecimento){
    this.tipoestabelecimentosSelecionado = cat;
    this.tipoestabelecimentoservice.deletarTipoEstabelecimento(this.tipoestabelecimentosSelecionado.id).subscribe(
      sucesso => { alert('Categoria Removida com Sucesso'); this.tipoestabelecimentoservice.getTodosTiposestabelecimento().subscribe(dados => this.tipoestabelecimento = dados)
    });
  }

}
