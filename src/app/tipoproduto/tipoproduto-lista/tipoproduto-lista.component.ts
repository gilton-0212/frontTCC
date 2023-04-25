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

  constructor(
  private tipoprodutoService: TipoprodutoService
    ) { }

  ngOnInit(): void {
    this.tipoprodutoService.getTodosTipoproduto().subscribe(dados => this.tipoproduto = dados);
  }
}
