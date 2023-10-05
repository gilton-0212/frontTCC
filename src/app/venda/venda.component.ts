import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IVenda, itens } from './IVenda';
import { ProductResumList } from '../produto/productResum.model';
import { AuthService } from '../Security/Service/auth.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @Input() carrinho?: ProductResumList [];

  @Output() vendaRealizada =  new EventEmitter<boolean>();

  venda: IVenda = {
    id: 0,
    cliente: {
      id: 0,
      nome: ''
    },
    dataVenda: '',
    itens: [],
    situacao: '',
    status: '',
    tipoPagamento: '',
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

  idUsuario?: number
  
  constructor( private usuarioService: AuthService) { }

  ngOnInit(): void {
    this.usuarioService.recuperarUsuario().subscribe(res => {
    this.idUsuario = res.id;
  })
  }




  fazerVenda(){
    let valorTotal = 0;
    this.carrinho!.forEach(element => {
/*       let itens: itens = {
        id:  element.id,
        quantidade: element.quantidade,
        produto:
      } */
      this.item!.produto!.id = element.id;
      this.item!.produto!.nome = element.nome;
      this.item!.quantidade = element.quantidade;
      valorTotal = valorTotal + (element.preco * element.quantidade);
      this.venda.itens.push(this.item!);
    });

    this.venda.cliente.id = this.idUsuario!;
    this.venda.dataVenda = new Date().toDateString();
    this.venda.valorTotal = valorTotal;

    console.log('venda: ',this.venda);
    this.vendaRealizada.emit(true);
  }

}
function OutputEvent(): (target: VendaComponent, propertyKey: "vendaRealizada") => void {
  throw new Error('Function not implemented.');
}

