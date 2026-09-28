package modeloreferencia.modelo organizado.com.estoque.model;


/**
 * CONCEITO POO: ABSTRAÇÃO e ENCAPSULAMENTO.
 * 
 * 'abstract' significa que esta classe serve apenas como modelo (molde) base.
 * Não podemos instanciar um "Produto" genérico, apenas suas subclasses (ex: ProdutoAlimenticio).
 */
public abstract class Produto {

    // CONCEITO POO: ENCAPSULAMENTO.
    // Atributos 'protected' podem ser acessados diretamente pelas subclasses,
    // mas continuam escondidos/protegidos do acesso direto de fora do pacote.
    protected String id;
    protected String nome;
    protected double preco;
    protected int quantidade;

    // Construtor: Usado pelas subclasses via super(...) para inicializar o produto.
    public Produto(String id, String nome, double preco, int quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // CONCEITO POO: POLIMORFISMO (Método Abstrato).
    // Cada subclasse SERÁ OBRIGADA a implementar este método da sua própria maneira.
    public abstract String getDetalhes();

    // Regra de Negócio Encapsulada: Adicionar quantidade ao estoque
    public void adicionarEstoque(int qtd) {
        if (qtd > 0) {
            this.quantidade += qtd;
        } else {
            System.out.println("[Erro] Quantidade para entrada deve ser maior que zero.");
        }
    }

    // Regra de Negócio Encapsulada: Remover quantidade do estoque
    public boolean removerEstoque(int qtd) {
        if (qtd <= 0) {
            System.out.println("[Erro] Quantidade para saída deve ser maior que zero.");
            return false;
        }
        if (qtd <= this.quantidade) {
            this.quantidade -= qtd;
            return true;
        } else {
            System.out.println("[Erro] Estoque insuficiente para o produto: " + nome);
            return false;
        }
    }

    // Getters e Setters (Interface de acesso seguro aos atributos)
    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if (preco >= 0) {
            this.preco = preco;
        }
    }

    public int getQuantidade() {
        return quantidade;
    }

    // Sobrescrevendo o método toString() padrão do Java para exibição legível
    @Override
    public String toString() {
        return String.format("[%s] %s | R$ %.2f | Qtd: %d", id, nome, preco, quantidade);
    }
}
