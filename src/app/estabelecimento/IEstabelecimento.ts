import { nome } from './../models/nome.model';

export interface IEstabelecimento{
  id: number;
  nome: string;
  nomeFantasia: string;
  cnpj: string;
  email: string;
  telefone: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  nomeMunicipio: string;
  uf: string;
  nomePais: string;
  tipoEstabelecimento: nome;
  senha: string;
}
