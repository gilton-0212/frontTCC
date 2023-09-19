import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProdutoService } from '../produto.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {


  arquivo: any;

  imagemProduto: string = 'assets/login.jpg';

  formulario!: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private form: FormBuilder,
    private readonly sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    // console.log(event)
    this.arquivo = event.target.files[0];
  }

  uploadImagem() {

    let formData = new FormData();
    formData.append('arquivo', this.arquivo);

    this.produtoService.uploadImagem(formData).subscribe({
      next: (value) => {

        value.caminhoImagem;
        let parteEspecifica = 'assets/'
        //this.imagemProduto = srt.substring;

        let partes = value.caminhoImagem.split(parteEspecifica);

        if (partes.length > 1) {
          let substringDesejada = partes[1]; // A parte desejada é a segunda parte do array
          this.imagemProduto = 'assets/' + substringDesejada.trim();
          console.log(this.imagemProduto); // Use trim() para remover espaços em branco extras
        } else {
          console.log("A parte específica não foi encontrada na string maior.");
        }
        /*  this.sanitizer.bypassSecurityTrustResourceUrl(this.imagemProduto);
         console.log(value.caminhoImagem) */
        //this.form.get('certificadoDigitalCaminho')?.setValue(value);
      }
    });
  }

}
