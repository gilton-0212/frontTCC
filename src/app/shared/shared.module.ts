import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterHubComponent } from './footer-hub/footer-hub.component';
import { HeadHubComponent } from './head-hub/head-hub.component';
import { HeadGerenciaComponent } from './head-gerencia/head-gerencia.component';
import { HeadCadastroComponent } from './head-cadastro/head-cadastro.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterHubComponent,
    HeadHubComponent,
    HeadGerenciaComponent,
    HeadCadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    FooterHubComponent,
    HeadHubComponent,
    HeadGerenciaComponent,
    HeadCadastroComponent
  ]
})
export class SharedModule { }
