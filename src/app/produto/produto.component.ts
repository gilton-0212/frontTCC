import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Security/Service/auth.service';
import { VendaService } from '../venda/venda.service';
import { ClienteService } from '../cliente/cliente.service';
import { nome } from '../models/nome.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  cliente?: nome;

  constructor(
    private usuarioService: AuthService,
    private vendaService: VendaService,
    private clienteService: ClienteService
  ) { }

  async ngOnInit() {
    console.log(1)
    await this.usuarioService.recuperarUsuario().then(async usuario => {
      await this.clienteService.getClienteUsuario(usuario.id).subscribe(res => {
        this.cliente = res
      })
    })

}
}
