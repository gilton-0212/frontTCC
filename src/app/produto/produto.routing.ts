
import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
const routes : Routes = [

  {path: 'produto', component: ProdutoListaComponent},
  {path: 'produto/formulario', component: ProdutoFormComponent},
  {path: 'meusprodutos', component: MeusProdutosComponent}


]

@NgModule({

  imports:[RouterModule.forChild(routes)],

  exports:[RouterModule]
})

export class ProdutoRoutes{}
