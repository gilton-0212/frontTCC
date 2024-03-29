import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoRoutes } from './produto.routing';
import { ProdutoComponent } from './produto.component';
import { ProdutoFilterComponent } from './produto-filter/produto-filter.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { VendaModule } from '../venda/venda.module';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutoRoutes,
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
    FileUploadModule,
    DialogModule,
    VendaModule,
    FormsModule

  ],
  exports: [ProdutoFilterComponent,
  ProdutoListaComponent],
  declarations: [
    ProdutoListaComponent,
    ProdutoComponent,
    ProdutoFilterComponent,
    ProdutoFormComponent,
    MeusProdutosComponent
  ],

  providers: []
})

export class ProdutoModule{}
