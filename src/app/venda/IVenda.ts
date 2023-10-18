import { nome } from "../models/nome.model";

export interface IVenda{
    id: number;
    cliente: nome;
    dataVenda: Date;
    itens: itens[];
    situacao: string;
    status: string;
    tipoPagamento: string;
    valorTotal: number;

}

export interface itens{
    id: number;
    produto: nome;
    quantidade:number;
    
}

export interface VendaResum{
    id: number;
    dataVenda: Date;
    valorTotal: number;
    status: string;
    situacao: string;
    nomeCliente: string;
}
  