package modeloreferencia.modelo organizado.com.estoque.app;

import com.estoque.model.ProdutoAlimenticio;
import com.estoque.model.ProdutoEletronico;
import com.estoque.service.GerenciadorEstoque;

import java.util.Scanner;

/**
 * Classe principal responsável pela interface com o usuário (Console)
 * e controle do fluxo do sistema.
 */
public class Main {

    public static void main(String[] args) {
        GerenciadorEstoque gerenciador = new GerenciadorEstoque();
        Scanner scanner = new Scanner(System.in);
        boolean rodando = true;

        System.out.println("=========================================");
        System.out.println(" SISTEMA DE CONTROLE DE ESTOQUE (JAVA POO)");
        System.out.println("=========================================");

        while (rodando) {
            System.out.println("\nMENU PRINCIPAL:");
            System.out.println("1 - Cadastrar Produto Alimentício");
            System.out.println("2 - Cadastrar Produto Eletrônico");
            System.out.println("3 - Dar Entrada no Estoque");
            System.out.println("4 - Dar Saída do Estoque");
            System.out.println("5 - Exibir Relatório Geral");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            int opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha do buffer

            switch (opcao) {
                case 1:
                    System.out.print("ID: ");
                    String idA = scanner.nextLine();
                    System.out.print("Nome: ");
                    String nomeA = scanner.nextLine();
                    System.out.print("Preço: ");
                    double precoA = scanner.nextDouble();
                    System.out.print("Quantidade Inicial: ");
                    int qtdA = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Data de Validade (dd/mm/aaaa): ");
                    String validade = scanner.nextLine();

                    gerenciador.cadastrarProduto(
                        new ProdutoAlimenticio(idA, nomeA, precoA, qtdA, validade)
                    );
                    break;

                case 2:
                    System.out.print("ID: ");
                    String idE = scanner.nextLine();
                    System.out.print("Nome: ");
                    String nomeE = scanner.nextLine();
                    System.out.print("Preço: ");
                    double precoE = scanner.nextDouble();
                    System.out.print("Quantidade Inicial: ");
                    int qtdE = scanner.nextInt();
                    System.out.print("Garantia (meses): ");
                    int garantia = scanner.nextInt();
                    scanner.nextLine();

                    gerenciador.cadastrarProduto(
                        new ProdutoEletronico(idE, nomeE, precoE, qtdE, garantia)
                    );
                    break;

                case 3:
                    System.out.print("ID do produto: ");
                    String idEntrada = scanner.nextLine();
                    System.out.print("Quantidade de entrada: ");
                    int qtdEntrada = scanner.nextInt();
                    gerenciador.darEntradaEstoque(idEntrada, qtdEntrada);
                    break;

                case 4:
                    System.out.print("ID do produto: ");
                    String idSaida = scanner.nextLine();
                    System.out.print("Quantidade de saída: ");
                    int qtdSaida = scanner.nextInt();
                    gerenciador.darSaidaEstoque(idSaida, qtdSaida);
                    break;

                case 5:
                    gerenciador.gerarRelatorioGeral();
                    break;

                case 0:
                    rodando = false;
                    System.out.println("Encerrando o sistema... Bons estudos!");
                    break;

                default:
                    System.out.println("Opção inválida! Tente novamente.");
            }
        }

        scanner.close();
    }
}