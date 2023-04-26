import { TipoestabelecimentoService } from './../../tipoestabelecimento/tipoestabelecimento.service';
import { TipoestabelecimentoComponent } from './../../tipoestabelecimento/tipoestabelecimento.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../estabelecimento.service';
import { nome } from 'src/app/models/nome.model';

@Component({
  selector: 'app-estabelecimento-formulario',
  templateUrl: './estabelecimento-formulario.component.html',
  styleUrls: ['./estabelecimento-formulario.component.css']
})
export class EstabelecimentoFormularioComponent implements OnInit {

  formulario!: FormGroup;

  submitted = false;

  tipoEstabelecimento! : nome[];

  constructor(
    private form: FormBuilder,
    private estabelecimentoService : EstabelecimentoService,
    private router : Router,
    private route : ActivatedRoute,
    private tipoestabelecimentoService : TipoestabelecimentoService
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log(id)
    if (id) {
      this.preencherFormulario(id);
    }

    this.formulario= this.form.group({
      id:             [null],
      nome:           [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeFantasia:   [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cnpj:           [null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:          [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      telefone:       [null,[Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
      logradouro:     [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      numero:         [null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      complemento:    [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      bairro:         [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cep:            [null,[Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      nomeMunicipio:  [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      uf:             [null,[Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      nomePais:       [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      tipoEstabelecimento:[null],

    })

  }

  preencherFormulario(id: number) {

    this.estabelecimentoService.getEstabelecimentoId(id)
      .subscribe(result => {
        this.formulario.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarEstabelecimento() {

    const estabelecimento = this.formulario.value;

    //edicao
    if(estabelecimento.id){
      this.estabelecimentoService.putAtualizarEstabelecimento(estabelecimento).subscribe(
        secesso => {
          this.router.navigate(['estabelecimento'])
        },
        error => console.error(error)
      );
    }
    //adicição
    else{
      this.estabelecimentoService.postCriarEstabelecimento(estabelecimento).subscribe(
        secesso => {
          this.router.navigate(['estabelecimento'])
        },
        error => console.error(error)
      );
    }
  }

  hasError(field: string){
    return this.formulario.get(field)?.errors;

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');
      this.estabelecimentoService.postCriarEstabelecimento(this.formulario.value).subscribe(
        success =>console.log('sucesso'),
        erro=> console.error("erro"),
        () => console.log('request completo')
        );
    }

  }

  onCancel(){
    this.submitted = false;
    this.formulario.reset();

  }

  buscarTipo(event: any) {
    const nome = event.query;
    this.tipoestabelecimentoService.getTipoEstabelecimentoPorNome(nome).subscribe({
      next: (result) => {
        this.tipoEstabelecimento = result;
      }
    });
  }


}
