import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Filter } from "src/app/models/filter";
import { FormModel } from "src/app/models/form-model";
import { ProductFilter } from "../productFilter.model";
import { FilterSearch, RelationalOperator } from "src/app/models/filter-search";

@Component({
    selector: 'app-produto-filter',
    templateUrl: './produto-filter.component.html',
    styleUrls: ['./produto-filter.component.css']
  })
  export class ProdutoFilterComponent implements OnInit {

    @Input() filter?: Filter;

    @Output() search = new EventEmitter();
  
    form: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildResourceForm();
    }

    handlerSearch() {

        if (!this.filter)
          return;
    
        const filtres = new Array<FilterSearch>();
        const filter = this.form.value as ProductFilter;
    
        if (filter.id) {
          filtres.push(new FilterSearch({ name: 'id', value: filter.id, relationalOperator: RelationalOperator.EQUAL }));
        }
    
        if (filter.nome) {
    
          filtres.push(new FilterSearch({ name: 'nome', value: filter.nome, relationalOperator: RelationalOperator.LIKE }));
        }
    
        if (filter.categoriaProduto) {
          filtres.push(new FilterSearch({ name: 'categoriaProduto', value: filter.categoriaProduto, relationalOperator: RelationalOperator.LIKE }));
        }

        if (filter.descricao) {
            filtres.push(new FilterSearch({ name: 'descricao', value: filter.descricao, relationalOperator: RelationalOperator.LIKE }));
        }

        if (filter.preco) {
            filtres.push(new FilterSearch({ name: 'preco', value: filter.preco, relationalOperator: RelationalOperator.EQUAL }));
        }
    
        this.filter.filtersPes = filtres;
    
        this.search.emit(this.filter);
    
      }

    buildResourceForm() {

        const formConfig: FormModel<ProductFilter> = {
          id: [undefined],
          nome: [undefined],
          categoriaProduto: [undefined],
          descricao: [undefined],
          preco: [undefined],
        };
    
        this.form = this.formBuilder.group(formConfig);
      }
    
  }