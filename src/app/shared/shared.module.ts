import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterHubComponent } from './footer-hub/footer-hub.component';
import { HeadHubComponent } from './head-hub/head-hub.component';
import { HeadGerenciaComponent } from './head-gerencia/head-gerencia.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterHubComponent,
    HeadHubComponent,
    HeadGerenciaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    FooterHubComponent,
    HeadHubComponent,
    HeadGerenciaComponent
  ]
})
export class SharedModule { }
