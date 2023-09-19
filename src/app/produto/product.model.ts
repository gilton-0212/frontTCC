import { Name } from "./name.model";

export interface Product {

  id: number;
  nome: string;
  quantidadeEstoque: number;
  preco: number;
  sku: string;
  marca: string;
  descricao: string;
  imagemProduto: {url: string};


}


  /*
    private String descricao;
    @Column(name = "UNIDADE_MEDIDA")
    @Type(type = "com.tcc.core.config.types.CodeStringEnumType")
    private UnidadeMedida unidadeMedida;
    @Column(name = "ATIVO")
    @Type(type = "com.tcc.core.config.types.CodeStringEnumType")
    private SimNao ativo;
    @Column(name = "SITUACAO")
    @Type(type = "com.tcc.core.config.types.CodeStringEnumType")
    private DiponivelIndisponivel situacao;
    @JoinColumn(name = "ID_CATEGORIA_PRODUTO", referencedColumnName = "ID")
    @ManyToOne(optional = false)
    @NotNull
    private CategoriaProduto categoriaProduto;
    @Column(name = "IMAGEM_PRODUTO")
    private String imagemProduto;*/
