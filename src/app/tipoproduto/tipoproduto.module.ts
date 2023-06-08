import { TipoprodutoService } from './tipoproduto.service';

import { ReactiveFormsModule } from '@angular/forms';
import { TipoprodutoRoutes } from './tipoproduto.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TipoprodutoComponent } from './tipoproduto.component';
import { TipoprodutoFormularioComponent } from './tipoproduto-formulario/tipoproduto-formulario.component';
import { TipoprodutoListaComponent } from './tipoproduto-lista/tipoproduto-lista.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports:[
    CommonModule,
    TipoprodutoRoutes,
    ReactiveFormsModule,
    SharedModule
  ],

  exports:[],

  declarations:[
    TipoprodutoComponent,
    TipoprodutoFormularioComponent,
    TipoprodutoListaComponent


  ],

  providers: [TipoprodutoService]

})

export class TipoprodutoModule{}
