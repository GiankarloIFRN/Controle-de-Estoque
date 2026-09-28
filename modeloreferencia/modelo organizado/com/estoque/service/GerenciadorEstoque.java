package modeloreferencia.modelo organizado.com.estoque.service;

import com.estoque.model.IProvedorRelatorio;
import com.estoque.model.Produto;

import java.util.ArrayList;
import java.util.List;

/**
 * CONCEITO POO: COMPOSIÇÃO / GERENCIAMENTO.
 * Esta classe armazena e gerencia uma coleção de instâncias da classe Produto.
 */
public class GerenciadorEstoque implements IProvedorRelatorio {

    // Coleção genérica em Java para armazenar os produtos dinamicamente
    private List<Produto> produtos;

    public GerenciadorEstoque() {
        this.produtos = new ArrayList<>();
    }

    // Adiciona qualquer objeto que SEJA UM Produto (graças ao Polimorfismo)
    public void cadastrarProduto(Produto produto) {
        if (buscarPorId(produto.getId()) != null) {
            System.out.println("[Erro] Já existe um produto cadastrado com o ID: " + produto.getId());
            return;
        }
        produtos.add(produto);
        System.out.println("[Sucesso] Produto cadastrado com sucesso!");
    }

    // Busca um produto pelo ID no estoque
    public Produto buscarPorId(String id) {
        for (Produto p : produtos) {
            if (p.getId().equalsIgnoreCase(id)) {
                return p;
            }
        }
        return null;
    }

    // Executa movimentação de entrada no estoque
    public boolean darEntradaEstoque(String id, int quantidade) {
        Produto p = buscarPorId(id);
        if (p != null) {
            p.adicionarEstoque(quantidade);
            System.out.println("[Sucesso] Entrada realizada no estoque.");
            return true;
        }
        System.out.println("[Erro] Produto não encontrado!");
        return false;
    }

    // Executa movimentação de saída do estoque
    public boolean darSaidaEstoque(String id, int quantidade) {
        Produto p = buscarPorId(id);
        if (p != null) {
            boolean sucesso = p.removerEstoque(quantidade);
            if (sucesso) {
                System.out.println("[Sucesso] Saída realizada do estoque.");
            }
            return sucesso;
        }
        System.out.println("[Erro] Produto não encontrado!");
        return false;
    }

    // CONCEITO POO: POLIMORFISMO EM AÇÃO.
    // Implementação da interface IProvedorRelatorio.
    // O método chama 'p.getDetalhes()' sem precisar saber se é Alimento ou Eletrônico!
    @Override
    public void gerarRelatorioGeral() {
        System.out.println("\n===== RELATÓRIO GERAL DO ESTOQUE =====");
        if (produtos.isEmpty()) {
            System.out.println("Nenhum produto cadastrado no momento.");
            return;
        }

        double valorTotalEstoque = 0;

        for (Produto p : produtos) {
            // Chamada polimórfica
            System.out.println(p.getDetalhes());
            valorTotalEstoque += (p.getPreco() * p.getQuantidade());
        }

        System.out.println("--------------------------------------");
        System.out.printf("VALOR TOTAL ACUMULADO EM ESTOQUE: R$ %.2f\n", valorTotalEstoque);
        System.out.println("======================================\n");
    }
}
