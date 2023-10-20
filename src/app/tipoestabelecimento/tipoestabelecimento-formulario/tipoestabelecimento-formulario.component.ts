import { ActivatedRoute, Router } from '@angular/router';
import { TipoestabelecimentoService } from './../tipoestabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipoestabelecimento-formulario',
  templateUrl: './tipoestabelecimento-formulario.component.html',
  styleUrls: ['./tipoestabelecimento-formulario.component.css']
})
export class TipoestabelecimentoFormularioComponent implements OnInit {


  formulario!: FormGroup;

  submitted = false;

  constructor(
    private form: FormBuilder,
    private tipoestabelecimentoserice : TipoestabelecimentoService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.preencherFormulario(id);
    }

    this.formulario= this.form.group({
      id: [],
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]]

    })
  }

  preencherFormulario(id: number) {
    this.tipoestabelecimentoserice.getTipoEstabelecimentoId(id)
      .subscribe(result => {
        this.formulario.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarTipoEstabelecimento() {

    const tipoestabelecimento = this.formulario.value;

    //edicao
    if(tipoestabelecimento.id){
      this.tipoestabelecimentoserice.putAtualizarTipoEstabelecimento(tipoestabelecimento).subscribe(
        secesso => { alert('Categoria Editada com Sucesso')
          this.router.navigate(['tipoestabelecimento'])
        },
        error => console.error(error)
      );
    }
    //adicição
    else{
      this.tipoestabelecimentoserice.postCriarTipoEstabelecimento(tipoestabelecimento).subscribe(
        secesso => { alert('Categoria Adicionada com Sucesso')
          this.router.navigate(['tipoestabelecimento'])
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
    if(this.formulario.valid){
      console.log('submit');
      this.tipoestabelecimentoserice.postCriarTipoEstabelecimento(this.formulario.value).subscribe(
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

}
