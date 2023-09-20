import { ITipoproduto } from "../tipoproduto/ITipoproduto";
import { Name } from "./name.model";

export interface Product {

  id: number;
  nome: string;
  quantidadeEstoque: number;
  preco: number;
  sku: string;
  marca: string;
  descricao: string;
  imagemProduto: string;
  categoriaProduto: ITipoproduto;
  ativo: string;
  situacao: string;
  unidadeMedida: string;

}

