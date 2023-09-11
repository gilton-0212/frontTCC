import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoRoutes } from './produto.routing';
import { ProdutoComponent } from './produto.component';
import { ProdutoFilterComponent } from './produto-filter/produto-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutoRoutes,
    SharedModule

  ],
  exports: [ProdutoFilterComponent,
  ProdutoListaComponent],
  declarations: [
    ProdutoListaComponent,
    ProdutoComponent,
    ProdutoFilterComponent
  ],

  providers: []
})

export class ProdutoModule{}
