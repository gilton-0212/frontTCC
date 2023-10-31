import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProdutoService } from '../produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TipoprodutoService } from 'src/app/tipoproduto/tipoproduto.service';
import { nome } from 'src/app/models/nome.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { AuthService } from 'src/app/Security/Service/auth.service';
import { EstabelecimentoService } from 'src/app/estabelecimento/estabelecimento.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {


  arquivo: any;

  imagemProduto: string = 'assets/DEFAULT.jpeg';

  formulario!: FormGroup;

  tipoProduto!: nome[];

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
    { label: 'Sim', value: 'SIM' },
    { label: 'Não', value: 'NAO' },
  ];

  situacoes = [
    { label: 'Disponível', value: 'DISPONIVEL' },
    { label: 'Indisponível', value: 'INDISPONIVEL' },
  ]

  estabelecimento!: nome;

  usuario!: any;

  constructor(
    private login: AuthService,
    private produtoService: ProdutoService,
    private form: FormBuilder,
    private tipoProdutoService: TipoprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: AuthService,
    private estabelecimentoService: EstabelecimentoService
  ) { }

  async ngOnInit(): Promise<void> {


    this.criarForm()


    await this.usuarioService.recuperarUsuario().then(async usuario => {
      await this.estabelecimentoService.getEstabelecimentoUsuario(usuario.id).then(res => {
        this.formulario.get('estabelecimento')?.setValue(res)
      })
    })

  }

  criarForm() {
    this.formulario = this.form.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      quantidadeEstoque: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sku: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      preco: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      marca: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      unidadeMedida: ['UNIDADE', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      ativo: ['SIM', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      situacao: ['DISPONIVEL', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      categoriaProduto: [null],
      imagemProduto: [null],
      estabelecimento: [null]

    })
  }

  onFileChange(event: any) {

    this.arquivo = event.currentFiles[0].name;
  }

  uploadImagem(event: { files: File[] }) {
    let formData = new FormData();
    formData.append('arquivo', event.files[0], event.files[0].name);

    this.produtoService.uploadImagem(formData).subscribe({
      next: (value) => {
        let parteEspecifica = 'assets/'

        let partes = value.caminhoImagem.split(parteEspecifica);

        if (partes.length > 1) {
          let substringDesejada = partes[1]; // A parte desejada é a segunda parte do array
          this.imagemProduto = 'assets/' + substringDesejada.trim(); // Use trim() para remover espaços em branco extras
          this.formulario.get('imagemProduto')?.setValue(this.imagemProduto)
        } else {
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

  async adicionarProduto() {
    let produto = this.formulario.value;

    console.log(produto)
    this.produtoService.postCriarProduto(produto).subscribe(
      secesso => {
        alert('Produto Cadastrado com Sucesso')
        this.router.navigate(['home'])
      },
      error => console.error(error)
    );

  }

  logout(){
    this.login.logout();
  }

}
