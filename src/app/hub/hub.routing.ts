
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HubComponent } from './hub.component';
const routes : Routes = [

  {path: 'gestao', component: HubComponent},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HubRoutes{}
