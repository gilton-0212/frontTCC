import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoRoutes } from './produto.routing';
import { ProdutoComponent } from './produto.component';


@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutoRoutes

  ],
  exports: [],
  declarations: [
    ProdutoListaComponent,
    ProdutoComponent
  ],

  providers: []
})

export class ProdutoModule{}
