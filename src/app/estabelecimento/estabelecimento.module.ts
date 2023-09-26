import { AutoCompleteModule } from 'primeng/autocomplete';
import { EstabelecimentoService } from './estabelecimento.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstabelecimentoListaComponent } from './estabelecimento-lista/estabelecimento-lista.component';
import { EstabelecimentoFormularioComponent } from './estabelecimento-formulario/estabelecimento-formulario.component';
import { EstabelecimentoRoutes } from './estabelecimento.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { EstabelecimentoComponent } from './estabelecimento.component';
import { SharedModule } from '../shared/shared.module';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports:[
    CommonModule,
    EstabelecimentoRoutes,
    AutoCompleteModule,
    ReactiveFormsModule,
    SharedModule,
    MenubarModule,
    InputTextModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    FieldsetModule,
    PasswordModule,
    InputNumberModule,
    AutoCompleteModule,
    DropdownModule,
    FileUploadModule
  ],

  exports:[],

  declarations:[

    EstabelecimentoListaComponent,
    EstabelecimentoFormularioComponent,
    EstabelecimentoComponent

  ],

  providers: [EstabelecimentoService]

})

export class EstabelecimentoModule{}
