import { ClienteComponent } from './cliente.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteService } from './cliente.service';
import { ClienteRoutes } from './cliente.routing';
import { SharedModule } from '../shared/shared.module';
@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClienteRoutes,
    SharedModule

  ],
  exports: [],
  declarations: [

    ClienteComponent,
    ClienteFormularioComponent,
    ClienteListaComponent
  ],

  providers: [ClienteService]
})

export class ClienteModule{}
