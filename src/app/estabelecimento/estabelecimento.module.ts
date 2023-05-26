import { AutoCompleteModule } from 'primeng/autocomplete';
import { EstabelecimentoService } from './estabelecimento.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstabelecimentoListaComponent } from './estabelecimento-lista/estabelecimento-lista.component';
import { EstabelecimentoFormularioComponent } from './estabelecimento-formulario/estabelecimento-formulario.component';
import { EstabelecimentoRoutes } from './estabelecimento.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { EstabelecimentoComponent } from './estabelecimento.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports:[
    CommonModule,
    EstabelecimentoRoutes,
    AutoCompleteModule,
    ReactiveFormsModule,
    SharedModule
  ],

  exports:[],

  declarations:[

    EstabelecimentoListaComponent,
    EstabelecimentoFormularioComponent,
    EstabelecimentoComponent

  ],

  providers: [EstabelecimentoService]

})

export class EstabelecimentoModule{}
