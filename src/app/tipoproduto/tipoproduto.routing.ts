import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TipoprodutoFormularioComponent } from './tipoproduto-formulario/tipoproduto-formulario.component';
import { TipoprodutoListaComponent } from './tipoproduto-lista/tipoproduto-lista.component';

const routes : Routes = [
  { path: 'tipoproduto', component: TipoprodutoListaComponent },
  { path: 'tipoproduto/formulario', component: TipoprodutoFormularioComponent},
  { path: 'tipoproduto/editar/:id', component: TipoprodutoFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipoprodutoRoutes{}
