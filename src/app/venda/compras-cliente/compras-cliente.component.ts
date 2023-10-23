import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Security/Service/auth.service';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-compras-cliente',
  templateUrl: './compras-cliente.component.html',
  styleUrls: ['./compras-cliente.component.css']
})
export class ComprasClienteComponent implements OnInit {

  cliente!: any;
  list!: any;

  constructor(private service: VendaService, private usuarioService: AuthService) { }

  async ngOnInit(): Promise<void> {
    await this.usuarioService.recuperarUsuario().then(res => {
       this.cliente = res;
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
}
