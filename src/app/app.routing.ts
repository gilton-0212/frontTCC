import { GerenciaEstabelecimentoComponent } from './gerencia-estabelecimento/gerencia-estabelecimento.component';
import { Component } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ProdutoComponent } from './produto/produto.component';
import { TipoestabelecimentoComponent } from './tipoestabelecimento/tipoestabelecimento.component';
import { TipoprodutoComponent } from './tipoproduto/tipoproduto.component';
import { HubComponent } from './hub/hub.component';

const APP_ROUTS: Routes=[

  { path: 'cliente', component: ClienteComponent},
  { path: 'estabelecimento', component: EstabelecimentoComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'tipoestabelecimento', component: TipoestabelecimentoComponent },
  { path: 'tipoproduto', component: TipoprodutoComponent},
  { path: 'gestao', component: HubComponent},
  { path: 'gerencia', component: GerenciaEstabelecimentoComponent},
  { path: '', component: HomeComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTS);
