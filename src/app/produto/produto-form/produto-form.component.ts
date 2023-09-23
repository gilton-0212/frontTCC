import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProdutoService } from '../produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TipoprodutoService } from 'src/app/tipoproduto/tipoproduto.service';
import { nome } from 'src/app/models/nome.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {


  arquivo: any;

  imagemProduto: string = '';

  formulario!: FormGroup;

  tipoProduto! : nome[];

  unidades = [
    { label: 'Unidade', value: 'UNIDADE' },
    {
      label: 'Quilo',
      value: 'QUILO',
    },
    { label: 'Caixa', value: 'CAIXA' },
    { label: 'Metro', value: 'METRO' },
    { label: 'Metro Quadrado', value: 'METRO_QUADRADO' },
    { label: 'Litro', value: 'LITRO' },
    { label: 'Grama', value: 'GRAMA' },
    { label: 'Metro Cúbico', value: 'METRO_CUBICO' },
    { label: 'Jogo', value: 'JOGO' },
    { label: 'Rolo', value: 'ROLO' },
    { label: 'Centímetro', value: 'CENTIMETRO' },
    { label: 'Saco', value: 'SACO' },
  ];

  simNao = [
    {label: 'Sim', value: 'SIM'},
    {label: 'Não', value: 'NAO'},
  ];

  situacoes = [
    {label: 'Disponível', value: 'DISPONIVEL'},
    {label: 'Indisponível', value: 'INDISPONIVEL'},
  ]

  constructor(
    private produtoService: ProdutoService,
    private form: FormBuilder,
    private tipoProdutoService: TipoprodutoService,
    private route : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log(id)
    if (id) {
      this.preencherFormulario(id);
    }

    this.criarForm()
  }

  criarForm(){
    this.formulario= this.form.group({
      id:                   [null],
      nome:                 [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      quantidadeEstoque:    [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sku:                  [null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      preco:                [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      marca:                [null,[Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
      descricao:            [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      unidadeMedida:        ['UNIDADE',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      ativo:                ['SIM',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      situacao:             ['DISPONIVEL',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      categoriaProduto:     [null],
      imagemProduto:        [null]

    })
  }

  onFileChange(event: any) {
    this.arquivo = event.target.files[0];
  }

  uploadImagem() {

    let formData = new FormData();
    formData.append('arquivo', this.arquivo);

    this.produtoService.uploadImagem(formData).subscribe({
      next: (value) => {

        value.caminhoImagem;
        let parteEspecifica = 'assets/'

        let partes = value.caminhoImagem.split(parteEspecifica);

        if (partes.length > 1) {
          let substringDesejada = partes[1]; // A parte desejada é a segunda parte do array
          this.imagemProduto = 'assets/' + substringDesejada.trim(); // Use trim() para remover espaços em branco extras
          this.formulario.get('imagemProduto')?.setValue(this.imagemProduto)
        } else {
          console.log("Não possivel achar o caminho da imagem");
        }
      }
    });
  }

  buscarTipo(event: any) {
    const nome = event.query;
    this.tipoProdutoService.getTipoprodutoPorNome(nome).subscribe({
      next: (result) => {
        this.tipoProduto = result;
      }
    });
  }

  preencherFormulario(id: number) {

    this.produtoService.getProdutoId(id)
      .subscribe(result => {
        this.formulario.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarProduto() {

    const produto = this.formulario.value;

    //edicao
    if(produto.id){
      this.produtoService.putAtualizarProduto(produto).subscribe(
        secesso => { alert('Produto Editado com Sucesso')
          this.router.navigate(['produto'])
        },
        error => console.error(error)
      );
    }
    //adicição
    else{
      this.produtoService.postCriarProduto(produto).subscribe(
        secesso => { alert('Produto Cadastrado com Sucesso')
          this.router.navigate(['produto'])
        },
        error => console.error(error)
      );
    }
  }

}
