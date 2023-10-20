import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IVenda } from './IVenda';
import { ProductResumList } from '../produto/productResum.model';
import { AuthService } from '../Security/Service/auth.service';
import { VendaService } from './venda.service';
import { ClienteService } from '../cliente/cliente.service';
import { nome } from '../models/nome.model';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @Input() carrinho?: ProductResumList[];

  @Output() vendaRealizada = new EventEmitter<boolean>();

  venda: IVenda = {
    id: 0,
    cliente: {
      id: 0,
      nome: ''
    },
    dataVenda: new Date,
    itens: [],
    situacao: 'ATIVO',
    status: 'PREPARAR',
    tipoPagamento: 'DINHEIRO',
    valorTotal: 0
  };

  item: any = {
    id: 0,
    produto: {
      id: 0,
      nome: ''
    },
    quantidade: 0
  }

  valorTotal: number = 0;
  idUsuario?: number;
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

    await this.carrinho!.forEach(element => {
      this.valorTotal = this.valorTotal! + (element.preco * element.quantidade);
    })

  }

  fazerVenda() {
    this.carrinho!.forEach(element => {
      this.item!.produto!.id = element.id;
      this.item!.produto!.nome = element.nome;
      this.item!.quantidade = element.quantidade;
      this.valorTotal = this.valorTotal! + (element.preco * element.quantidade);
      this.venda.itens.push(this.item!);
    });
    console.log('cliente: ', this.cliente!);
    this.venda.cliente = this.cliente!
    this.venda.dataVenda = new Date()
    this.venda.valorTotal = this.valorTotal;

    console.log('venda: ', this.venda);

    this.vendaService.postCriarVenda(this.venda).subscribe(res => {
      alert('Venda Realizada com Sucesso')
    })
    this.vendaRealizada.emit(true);
  }

}
function OutputEvent(): (target: VendaComponent, propertyKey: "vendaRealizada") => void {
  throw new Error('Function not implemented.');
}

