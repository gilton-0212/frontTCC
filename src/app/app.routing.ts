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
import { LoginComponent } from './Security/login/login.component';
import { AuthGuard } from './Security/auth.guard';
import { VendaListaComponent } from './venda/venda-lista/venda-lista.component';
import { VendaProdutoListComponent } from './venda/venda-produto-list/venda-produto-list.component';
import { ComprasClienteComponent } from './venda/compras-cliente/compras-cliente.component';

const APP_ROUTS: Routes=[

  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  { path: 'estabelecimento', component: EstabelecimentoComponent, canActivate: [AuthGuard]},
  { path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard]},
  { path: 'tipoestabelecimento', component: TipoestabelecimentoComponent, canActivate: [AuthGuard] },
  { path: 'tipoproduto', component: TipoprodutoComponent, canActivate: [AuthGuard]},
  { path: 'gestao', component: HubComponent, canActivate: [AuthGuard]},
  { path: 'gerencia', component: GerenciaEstabelecimentoComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'venda-lista', component: VendaListaComponent, canActivate: [AuthGuard]},
  { path: 'produtos-vendidos', component: VendaProdutoListComponent, canActivate: [AuthGuard]},
  { path: 'compras', component: ComprasClienteComponent , canActivate: [AuthGuard]},
  { path: '', component: LoginComponent, canActivate: [AuthGuard]}

];

export const routing = RouterModule.forRoot(APP_ROUTS);
