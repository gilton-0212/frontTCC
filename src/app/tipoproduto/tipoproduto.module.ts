import { TipoprodutoService } from './tipoproduto.service';

import { ReactiveFormsModule } from '@angular/forms';
import { TipoprodutoRoutes } from './tipoproduto.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TipoprodutoComponent } from './tipoproduto.component';
import { TipoprodutoFormularioComponent } from './tipoproduto-formulario/tipoproduto-formulario.component';
import { TipoprodutoListaComponent } from './tipoproduto-lista/tipoproduto-lista.component';
import { SharedModule } from '../shared/shared.module';
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
    TipoprodutoRoutes,
    ReactiveFormsModule,
    SharedModule,
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
    TipoprodutoComponent,
    TipoprodutoFormularioComponent,
    TipoprodutoListaComponent


  ],

  providers: [TipoprodutoService]

})

export class TipoprodutoModule{}
