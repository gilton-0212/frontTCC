import { nome } from "../models/nome.model";

export interface IVenda{
    id: number;
    cliente: nome;
    dataVenda: string;
    itens: itens[];
    situacao: string;
    status: string;
    tipoPagamento: string;
    valorTotal: number;

}

interface itens{
    id: number;
    produto: nome;
    quantidade:number;
}
  