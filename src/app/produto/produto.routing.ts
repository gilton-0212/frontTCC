
import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
const routes : Routes = [

  {path: 'produto', component: ProdutoListaComponent}
  /*
  {path: 'produto/formulario', component: ClienteFormularioComponent},
  {path: 'produto/editar/:id', component: ClienteFormularioComponent}
  */

]

@NgModule({

  imports:[RouterModule.forChild(routes)],

  exports:[RouterModule]
})

export class ProdutoRoutes{}
