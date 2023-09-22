import { Router } from '@angular/router';
import { TipoprodutoService } from './../tipoproduto.service';

import { Component, OnInit } from '@angular/core';
import { ITipoproduto } from '../ITipoproduto';


@Component({
  selector: 'app-tipoproduto-lista',
  templateUrl: './tipoproduto-lista.component.html',
  styleUrls: ['./tipoproduto-lista.component.css']
})
export class TipoprodutoListaComponent implements OnInit {

  tipoproduto: ITipoproduto[] = [];
  tipoprodutoSelecionado! : ITipoproduto;

  constructor(
  private tipoprodutoService: TipoprodutoService,
  private router : Router
    ) { }

  ngOnInit(): void {
    this.tipoprodutoService.getTodosTipoproduto().subscribe(dados => this.tipoproduto = dados);
  }

  atualizarTipoproduto(id: number){
    this.router.navigate(['tipoproduto/editar', id])

  }

  deletarTipoproduto(cat: ITipoproduto){
    this.tipoprodutoSelecionado = cat;
    this.tipoprodutoService.deletarTipoproduto(this.tipoprodutoSelecionado.id).subscribe(
      sucesso => { alert('Categoria Removida com Sucesso'); this.tipoprodutoService.getTodosTipoproduto().subscribe(dados => this.tipoproduto = dados)
  });
  }


}
