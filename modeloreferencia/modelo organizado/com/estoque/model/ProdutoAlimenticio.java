package modeloreferencia.modelo organizado.com.estoque.model;

/**
 * CONCEITO POO: HERANÇA.
 * 'extends Produto' indica que ProdutoAlimenticio herda todos os atributos e métodos de Produto.
 */
public class ProdutoAlimenticio extends Produto {

    private String dataValidade;

    public ProdutoAlimenticio(String id, String nome, double preco, int quantidade, String dataValidade) {
        // 'super' chama o construtor da classe pai (Produto)
        super(id, nome, preco, quantidade);
        this.dataValidade = dataValidade;
    }

    public String getDataValidade() {
        return dataValidade;
    }

    // CONCEITO POO: POLIMORFISMO (Sobrescrita de Método / @Override)
    // Implementa o método abstrato herdado de Produto com lógica específica para alimentos.
    @Override
    public String getDetalhes() {
        return String.format("ALIMENTO -> %s | Validade: %s", super.toString(), dataValidade);
    }
}