import { TipoestabelecimentoService } from './tipoestabelecimento.service';
import { TipoestabelecimentoComponent } from './tipoestabelecimento.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TipoestabelecimentoListaComponent } from './tipoestabelecimento-lista/tipoestabelecimento-lista.component';
import { TipoestabelecimentoFormularioComponent } from './tipoestabelecimento-formulario/tipoestabelecimento-formulario.component';
import { TipoestabelecimentoRoutes } from './tipoestabelecimento.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  imports:[
    CommonModule,
    TipoestabelecimentoRoutes,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
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
    TipoestabelecimentoComponent,
    TipoestabelecimentoListaComponent,
    TipoestabelecimentoFormularioComponent
  ],

  providers: [TipoestabelecimentoService]

})

export class TipoestabelecimentoModule{}
