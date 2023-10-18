import { ClienteComponent } from './cliente.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteService } from './cliente.service';
import { ClienteRoutes } from './cliente.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../Security/login/login.component';
import { SecurityModule } from '../Security/security.module';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClienteRoutes,
    SharedModule,
    SecurityModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    FieldsetModule,
    PasswordModule,
    InputNumberModule,
    AutoCompleteModule,
    DropdownModule,
    FileUploadModule,

  ],
  exports: [],
  declarations: [

    ClienteComponent,
    ClienteFormularioComponent,
    ClienteListaComponent,
  ],

  providers: [ClienteService]
})

export class ClienteModule{}
