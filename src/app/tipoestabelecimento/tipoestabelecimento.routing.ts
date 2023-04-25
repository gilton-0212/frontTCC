import { TipoestabelecimentoFormularioComponent } from './tipoestabelecimento-formulario/tipoestabelecimento-formulario.component';
import { TipoestabelecimentoListaComponent } from './tipoestabelecimento-lista/tipoestabelecimento-lista.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes : Routes = [

  {path: 'tipoestabelecimento', component: TipoestabelecimentoListaComponent},
  {path: 'tipoestabelecimento/formulario', component: TipoestabelecimentoFormularioComponent},
  {path: 'tipoestabelecimento/editar/:id', component: TipoestabelecimentoFormularioComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipoestabelecimentoRoutes{}
