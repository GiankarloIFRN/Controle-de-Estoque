package modeloreferencia.modelo organizado.com.estoque.model;

/**
 * CONCEITO POO: HERANÇA.
 * Outra subclasse que especializa o conceito base de Produto.
 */
public class ProdutoEletronico extends Produto {

    private int garantiaMeses;

    public ProdutoEletronico(String id, String nome, double preco, int quantidade, int garantiaMeses) {
        super(id, nome, preco, quantidade);
        this.garantiaMeses = garantiaMeses;
    }

    public int getGarantiaMeses() {
        return garantiaMeses;
    }

    // Implementação específica do método abstrato
    @Override
    public String getDetalhes() {
        return String.format("ELETRÔNICO -> %s | Garantia: %d meses", super.toString(), garantiaMeses);
    }
}
