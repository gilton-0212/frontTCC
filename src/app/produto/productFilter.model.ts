export interface ProductFilter {
  id?: number;
  nome?: string;
  categoriaProduto?: string;
  descricao?: string;
  preco?: number;
  imagemProduto?: {url: string};
}
