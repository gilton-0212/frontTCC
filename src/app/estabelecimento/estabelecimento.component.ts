import { EstabelecimentoService } from './estabelecimento.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Security/Service/auth.service';
import { nome } from '../models/nome.model';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  formulario!: FormGroup;

  estabelecimento?: nome;

  constructor(private estabelecimentoService : EstabelecimentoService,
    private usuarioService: AuthService) { }

    async ngOnInit() {
      console.log(1)
      await this.usuarioService.recuperarUsuario().then(async usuario => {
        await this.estabelecimentoService.getEstabelecimentoUsuario(usuario.id).subscribe(res => {
          this.estabelecimento = res
        })
      })

}}
