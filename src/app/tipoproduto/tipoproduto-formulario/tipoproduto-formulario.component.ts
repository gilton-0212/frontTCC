import { TipoestabelecimentoService } from './../../tipoestabelecimento/tipoestabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoprodutoService } from '../tipoproduto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Security/Service/auth.service';

@Component({
  selector: 'app-tipoproduto-formulario',
  templateUrl: './tipoproduto-formulario.component.html',
  styleUrls: ['./tipoproduto-formulario.component.css']
})
export class TipoprodutoFormularioComponent implements OnInit {

  formulario!: FormGroup;

  submitted = false;

  constructor(
    private login: AuthService,
    private form : FormBuilder,
    private tipoprodutooservice : TipoprodutoService,
    private router : Router,
    private route : ActivatedRoute) { }

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
    this.tipoprodutooservice.getTipoprodutoId(id)
      .subscribe(result => {
        this.formulario.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarTipoproduto() {

    const tipoproduto = this.formulario.value;

    //edicao
    if(tipoproduto.id){
      this.tipoprodutooservice.putAtualizarTipoproduto(tipoproduto).subscribe(
        secesso => { alert('Categoria Editada com Sucesso')
          this.router.navigate(['tipoproduto'])
        },
        error => console.error(error)
      );
    }
    //adicição
    else{
      this.tipoprodutooservice.postCriarTipoproduto(tipoproduto).subscribe(
        secesso => { alert('Categoria Adicionada com Sucesso')
          this.router.navigate(['tipoproduto'])
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
      this.tipoprodutooservice.postCriarTipoproduto(this.formulario.value).subscribe(
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

  logout(){
    this.login.logout();
  }
  }

