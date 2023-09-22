import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  formulario!: FormGroup;

  submitted = false;

  constructor(

    private form: FormBuilder,
    private clienteService : ClienteService,
    private router : Router,
    private route : ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.preencherFormulario(id);
    }

    this.formulario= this.form.group({
      id:             [],
      nome:           [null],
      cpf:            [null],
      email:          [null],
      telefone:       [null],
      logradouro:     [null],
      numero:         [null],
      complemento:    [null],
      bairro:         [null],
      cep:            [null],
      nomeMunicipio:  [null],
      uf:             [null],
      nomePais:       [null],
      dataNascimento: [null],
      senha: [null]
    })

  }

  preencherFormulario(id: number) {
    this.clienteService.getClienteId(id)
      .subscribe(result => {
        this.formulario.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarCliente() {

    const cliente = this.formulario.value;

    //edicao
    if(cliente.id){
      this.clienteService.putAtualizarCliente(cliente).subscribe(
        secesso => { alert('Usuario Editado com Sucesso')
          this.router.navigate(['home'])
        },
        error => console.error(error)
      );
    }
    //adicição
    else{
      this.clienteService.postCriarCliente(cliente).subscribe(
        secesso => { alert('Usuario Cadastrado com Sucesso')
          this.router.navigate(['cliente'])
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
      this.clienteService.postCriarCliente(this.formulario.value).subscribe(
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
