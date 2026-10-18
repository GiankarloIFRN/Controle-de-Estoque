// Observação: Arquivo renomeado/padronizado para 'Main.java' conforme a convenção de nomenclatura Java (o nome do arquivo deve ser idêntico ao nome da classe pública)
public class Main {
    public static void main(String[] args) {
        Fornecedor f1 = new Fornecedor("Distribuidora Silva", "(00) 00000-0000");

        Produto p1 = new Produto("Caderno 10 matérias", 22.50, 40, f1);
        
        Produto p2 = new Produto();
        p2.setNome("Caneta Esferográfica");
        p2.setPreco(2.00);
        p2.setQuantidade(150);
        p2.setFornecedor(f1);

        System.out.println("=== SISTEMA DE CONTROLE DE ESTOQUE ===\n");
        p1.exibirInformacoes();
        p2.exibirInformacoes();
    }
}

