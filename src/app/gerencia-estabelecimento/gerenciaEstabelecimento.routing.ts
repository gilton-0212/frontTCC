
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GerenciaEstabelecimentoComponent } from './gerencia-estabelecimento.component';
const routes : Routes = [

  {path: 'gerencia', component: GerenciaEstabelecimentoComponent},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GerenciaEstabelecimentoRoutes{}
