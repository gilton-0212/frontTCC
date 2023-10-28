import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Security/Service/auth.service';
import { VendaService } from '../venda.service';
import { ClienteService } from 'src/app/cliente/cliente.service';

@Component({
  selector: 'app-compras-cliente',
  templateUrl: './compras-cliente.component.html',
  styleUrls: ['./compras-cliente.component.css']
})
export class ComprasClienteComponent implements OnInit {

  cliente!: any;
  list!: any;
  usuario!:any;

  usuarioLogado: any;

  constructor(private service: VendaService, private usuarioService: AuthService, private clienteService: ClienteService) { }

  async ngOnInit(): Promise<void> {
    await this.usuarioService.recuperarUsuario().then(async usuario => {
      this.usuarioLogado = usuario
      await this.clienteService.getClienteUsuario(usuario.id).then(res => {
        this.cliente = res
      })
     })

     this.comprasfeitas();

   }

   comprasfeitas(){
    console.log(this.cliente)
    this.service.comprasPorCliente(this.cliente.id).subscribe(res => {
      this.list = res;
      console.log(res)
    })
  }

  recuperarUser(){
  this.usuarioService.recuperarUsuario().then(res => {
    this.usuario = res;
  })
}

  logout(){
    this.usuarioService.logout();
  }
  }
