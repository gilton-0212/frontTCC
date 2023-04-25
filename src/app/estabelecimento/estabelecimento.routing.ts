import { NgModule } from '@angular/core';
import { EstabelecimentoFormularioComponent } from './estabelecimento-formulario/estabelecimento-formulario.component';
import { EstabelecimentoListaComponent } from './estabelecimento-lista/estabelecimento-lista.component';
import { Routes, RouterModule } from '@angular/router';
const routes : Routes = [

  {path: 'estabelecimento', component: EstabelecimentoListaComponent},
  {path: 'estabelecimento/formulario', component: EstabelecimentoFormularioComponent},
  {path: 'estabelecimento/editar/:id', component: EstabelecimentoFormularioComponent}

]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class EstabelecimentoRoutes{}
