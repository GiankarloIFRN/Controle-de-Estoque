public class Fornecedor {
    private String nome;
    private String telefone;

    // Observação: Construtor padrão devidamente fechado
    public Fornecedor() {
    }

    // Observação: Construtor com parâmetros desacoplado do construtor padrão
    public Fornecedor(String nome, String telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) { 
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}