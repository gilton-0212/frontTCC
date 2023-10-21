import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaComponent } from './venda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProdutoRoutes } from '../produto/produto.routing';
import { VendaListaComponent } from './venda-lista/venda-lista.component';
import { VendaProdutoListComponent } from './venda-produto-list/venda-produto-list.component';
import { ComprasClienteComponent } from './compras-cliente/compras-cliente.component';




@NgModule({
  declarations: [
    VendaComponent,
    VendaListaComponent,
    VendaProdutoListComponent,
    ComprasClienteComponent
  ],
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
    FormsModule
  ],
  exports:[
    VendaComponent
  ]
})
export class VendaModule { }
