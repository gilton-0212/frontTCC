import { TipoestabelecimentoService } from './tipoestabelecimento.service';
import { TipoestabelecimentoComponent } from './tipoestabelecimento.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TipoestabelecimentoListaComponent } from './tipoestabelecimento-lista/tipoestabelecimento-lista.component';
import { TipoestabelecimentoFormularioComponent } from './tipoestabelecimento-formulario/tipoestabelecimento-formulario.component';
import { TipoestabelecimentoRoutes } from './tipoestabelecimento.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:[
    CommonModule,
    TipoestabelecimentoRoutes,
    ReactiveFormsModule,
    SharedModule
  ],

  exports:[],

  declarations:[
    TipoestabelecimentoComponent,
    TipoestabelecimentoListaComponent,
    TipoestabelecimentoFormularioComponent
  ],

  providers: [TipoestabelecimentoService]

})

export class TipoestabelecimentoModule{}
