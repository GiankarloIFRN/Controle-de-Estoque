public class Produto {
    private String nome;
    private double preco;
    private int quantidade;
    private Fornecedor fornecedor;

    public Produto() {
    }

    public Produto(String nome, double preco, int quantidade, Fornecedor fornecedor) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.fornecedor = fornecedor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }  

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    // Observação: Corrigida a atribuição correta do atributo (era 'return fornecedor;')
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    // Observação: Adicionado getter para fornecedor (boa prática de encapsulamento)
    public Fornecedor getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(Fornecedor fornecedor) {
        this.fornecedor = fornecedor;
    }

    public void exibirInformacoes() {
        System.out.println("Produto: " + nome);
        System.out.println("Preço: R$" + preco);
        System.out.println("Quantidade em Estoque: " + quantidade);

        if (fornecedor != null) {
            // Observação: Inserido operador '+' ausente antes de fornecedor.getTelefone()
            System.out.println("Fornecedor: " + fornecedor.getNome() + " | Tel: " + fornecedor.getTelefone()); 
        } else {
            System.out.println("Fornecedor: Não cadastrado");
        }

        // Observação: Removida barra de escape inválida '\-'
        System.out.println("----------------------------------------");
    }
}