// ==========================================================================
// Controle de Estoque - Lógica Simples da Interface (JavaScript Vanilla)
// ==========================================================================

// Lista inicial com os mesmos dados da classe Main.java
let produtos = [
    {
        id: 1,
        nome: "Caderno 10 matérias",
        preco: 22.50,
        quantidade: 40,
        fornecedor: {
            nome: "Distribuidora Silva",
            telefone: "(00) 00000-0000"
        }
    },
    {
        id: 2,
        nome: "Caneta Esferográfica",
        preco: 2.00,
        quantidade: 150,
        fornecedor: {
            nome: "Distribuidora Silva",
            telefone: "(00) 00000-0000"
        }
    }
];

// Elementos do DOM
const tabelaCorpo = document.getElementById("tabela-corpo");
const emptyState = document.getElementById("empty-state");
const formProduto = document.getElementById("form-produto");
const totalProdutosEl = document.getElementById("total-produtos");
const totalItensEl = document.getElementById("total-itens");
const valorTotalEl = document.getElementById("valor-total");

// Formata valores numéricos para moeda brasileira (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Atualiza os cartões de resumo/métricas
function atualizarMetricas() {
    const totalProdutos = produtos.length;
    const totalItens = produtos.reduce((acc, p) => acc + p.quantidade, 0);
    const valorTotal = produtos.reduce((acc, p) => acc + (p.quantidade * p.preco), 0);

    totalProdutosEl.textContent = totalProdutos;
    totalItensEl.textContent = totalItens;
    valorTotalEl.textContent = formatarMoeda(valorTotal);
}

// Renderiza a tabela de produtos
function renderizarTabela() {
    tabelaCorpo.innerHTML = "";

    if (produtos.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";

        produtos.forEach((prod) => {
            const tr = document.createElement("tr");

            // Define alerta de estoque se for menor que 50 unidades
            const statusBadge = prod.quantidade < 50 
                ? '<span class="badge badge-alerta">Estoque Baixo</span>'
                : '<span class="badge badge-normal">Em Estoque</span>';

            const nomeForn = prod.fornecedor?.nome ? prod.fornecedor.nome : "Não informado";
            const telForn = prod.fornecedor?.telefone ? prod.fornecedor.telefone : "-";

            tr.innerHTML = `
                <td><strong>${prod.nome}</strong></td>
                <td>${formatarMoeda(prod.preco)}</td>
                <td>${prod.quantidade} un.</td>
                <td>${statusBadge}</td>
                <td>${nomeForn}</td>
                <td>${telForn}</td>
                <td>
                    <button class="btn btn-danger" onclick="removerProduto(${prod.id})">Excluir</button>
                </td>
            `;

            tabelaCorpo.appendChild(tr);
        });
    }

    atualizarMetricas();
}

// Remove um produto pelo ID
function removerProduto(id) {
    produtos = produtos.filter(p => p.id !== id);
    renderizarTabela();
}

// Trata o envio do formulário de cadastro
formProduto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome-produto").value.trim();
    const preco = parseFloat(document.getElementById("preco-produto").value);
    const quantidade = parseInt(document.getElementById("quantidade-produto").value, 10);
    const nomeFornecedor = document.getElementById("nome-fornecedor").value.trim();
    const telefoneFornecedor = document.getElementById("telefone-fornecedor").value.trim();

    if (!nome || isNaN(preco) || isNaN(quantidade)) {
        alert("Preencha todos os campos obrigatórios corretamente.");
        return;
    }

    const novoProduto = {
        id: Date.now(),
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        fornecedor: {
            nome: nomeFornecedor || "Não cadastrado",
            telefone: telefoneFornecedor || "-"
        }
    };

    produtos.push(novoProduto);
    renderizarTabela();
    formProduto.reset();
});

// Inicialização
renderizarTabela();

