import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
const routes : Routes = [

  {path: 'cliente', component: ClienteListaComponent},
  {path: 'cliente/formulario', component: ClienteFormularioComponent},
  {path: 'cliente/editar/:id', component: ClienteFormularioComponent}

]

@NgModule({

  imports:[RouterModule.forChild(routes)],

  exports:[RouterModule]
})

export class ClienteRoutes{}
