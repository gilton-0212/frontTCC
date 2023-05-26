import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ClienteModule } from './cliente/cliente.module';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ProdutoComponent } from './produto/produto.component';

import { TipoestabelecimentoComponent } from './tipoestabelecimento/tipoestabelecimento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SharedModule } from './shared/shared.module';
import { TipoprodutoModule } from './tipoproduto/tipoproduto.module';
import { TipoestabelecimentoModule } from './tipoestabelecimento/tipoestabelecimento.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HubComponent } from './hub/hub.component';
import { GerenciaEstabelecimentoComponent } from './gerencia-estabelecimento/gerencia-estabelecimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HubComponent,
    GerenciaEstabelecimentoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    routing,
    HttpClientModule,
    ClienteModule,
    SharedModule,
    TipoprodutoModule,
    TipoestabelecimentoModule,
    EstabelecimentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
