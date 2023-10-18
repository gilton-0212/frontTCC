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


export const Situacao = [
    { label: 'PREPARAR', value: 'PREPARAR' },
    { label: 'SEPRADO', value: 'SEPRADO' },
    { label: 'COLETADO', value: 'COLETADO' },
    { label: 'ENTREGUE', value: 'ENTREGUE' },
  ];
  