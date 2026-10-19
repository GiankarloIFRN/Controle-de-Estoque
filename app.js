// ==========================================================================
// Controle de Estoque - Lógica Corporativa da Interface (JavaScript Vanilla)
// ==========================================================================

// Base de dados inicial de produtos
let produtos = [
    {
        id: 1,
        nome: "Caderno 10 matérias",
        preco: 22.50,
        quantidade: 40,
        fornecedor: {
            nome: "Distribuidora Silva",
            telefone: "(11) 98765-4321"
        }
    },
    {
        id: 2,
        nome: "Caneta Esferográfica",
        preco: 2.00,
        quantidade: 150,
        fornecedor: {
            nome: "Distribuidora Silva",
            telefone: "(11) 98765-4321"
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
const buscaInput = document.getElementById("busca-produto");
const filtroStatus = document.getElementById("filtro-status");
const contagemRegistrosEl = document.getElementById("contagem-registros");
const telefoneInput = document.getElementById("telefone-fornecedor");

// Formata valores numéricos para moeda brasileira (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Formata número de telefone dinamicamente
if (telefoneInput) {
    telefoneInput.addEventListener("input", function (e) {
        let v = e.target.value.replace(/\D/g, "");
        if (v.length > 11) v = v.slice(0, 11);

        if (v.length > 10) {
            e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
        } else if (v.length > 6) {
            e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
        } else if (v.length > 2) {
            e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
        } else if (v.length > 0) {
            e.target.value = `(${v}`;
        } else {
            e.target.value = "";
        }
    });
}

// Sistema de Notificações Toast
function mostrarNotificacao(mensagem, tipo = "sucesso") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;

    let icone = "";
    if (tipo === "sucesso") {
        icone = `
            <svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
        `;
    } else if (tipo === "erro") {
        icone = `
            <svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
        `;
    } else {
        icone = `
            <svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
        `;
    }

    toast.innerHTML = `${icone}<span>${mensagem}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

// Atualiza os cartões de resumo/indicadores
function atualizarMetricas() {
    const totalProdutos = produtos.length;
    const totalItens = produtos.reduce((acc, p) => acc + p.quantidade, 0);
    const valorTotal = produtos.reduce((acc, p) => acc + (p.quantidade * p.preco), 0);

    totalProdutosEl.textContent = totalProdutos;
    totalItensEl.textContent = totalItens.toLocaleString("pt-BR");
    valorTotalEl.textContent = formatarMoeda(valorTotal);
}

// Determina a etiqueta de status com base na quantidade
function obterBadgeStatus(quantidade) {
    if (quantidade === 0) {
        return '<span class="badge badge-esgotado">Esgotado</span>';
    } else if (quantidade < 50) {
        return '<span class="badge badge-alerta">Estoque Baixo</span>';
    }
    return '<span class="badge badge-normal">Em Estoque</span>';
}

// Renderiza a tabela aplicando filtros de busca e status
function renderizarTabela() {
    tabelaCorpo.innerHTML = "";

    const termoBusca = buscaInput ? buscaInput.value.toLowerCase().trim() : "";
    const statusFiltro = filtroStatus ? filtroStatus.value : "todos";

    // Filtragem em tempo real
    const produtosFiltrados = produtos.filter((prod) => {
        const nomeMatch = prod.nome.toLowerCase().includes(termoBusca);
        const fornecedorMatch = (prod.fornecedor?.nome || "").toLowerCase().includes(termoBusca);
        const atendeBusca = nomeMatch || fornecedorMatch;

        if (!atendeBusca) return false;

        if (statusFiltro === "esgotado") return prod.quantidade === 0;
        if (statusFiltro === "alerta") return prod.quantidade > 0 && prod.quantidade < 50;
        if (statusFiltro === "normal") return prod.quantidade >= 50;
        return true;
    });

    if (produtosFiltrados.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";

        produtosFiltrados.forEach((prod) => {
            const tr = document.createElement("tr");

            const statusBadge = obterBadgeStatus(prod.quantidade);
            const nomeForn = prod.fornecedor?.nome ? prod.fornecedor.nome : "Não informado";
            const telForn = prod.fornecedor?.telefone ? prod.fornecedor.telefone : "-";

            tr.innerHTML = `
                <td class="prod-nome">${prod.nome}</td>
                <td class="text-right">${formatarMoeda(prod.preco)}</td>
                <td class="text-center">${prod.quantidade} un.</td>
                <td>${statusBadge}</td>
                <td>${nomeForn}</td>
                <td>${telForn}</td>
                <td class="text-center">
                    <button class="btn-action-delete" onclick="removerProduto(${prod.id})" title="Excluir produto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"/>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                        <span>Excluir</span>
                    </button>
                </td>
            `;

            tabelaCorpo.appendChild(tr);
        });
    }

    // Atualiza a legenda de contagem
    if (contagemRegistrosEl) {
        if (produtos.length === 0) {
            contagemRegistrosEl.textContent = "Nenhum produto cadastrado no catálogo.";
        } else if (produtosFiltrados.length === produtos.length) {
            contagemRegistrosEl.textContent = `Exibindo todos os ${produtos.length} produtos cadastrados`;
        } else {
            contagemRegistrosEl.textContent = `Exibindo ${produtosFiltrados.length} de ${produtos.length} produtos`;
        }
    }

    atualizarMetricas();
}

// Remove um produto pelo ID
function removerProduto(id) {
    const produtoIndex = produtos.findIndex((p) => p.id === id);
    if (produtoIndex !== -1) {
        const produtoNome = produtos[produtoIndex].nome;
        produtos.splice(produtoIndex, 1);
        renderizarTabela();
        mostrarNotificacao(`Produto "${produtoNome}" removido com sucesso.`, "info");
    }
}

// Eventos de Busca e Filtro
if (buscaInput) {
    buscaInput.addEventListener("input", renderizarTabela);
}

if (filtroStatus) {
    filtroStatus.addEventListener("change", renderizarTabela);
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
        mostrarNotificacao("Por favor, preencha todos os campos obrigatórios corretamente.", "erro");
        return;
    }

    if (preco < 0 || quantidade < 0) {
        mostrarNotificacao("Preço e quantidade devem conter valores positivos.", "erro");
        return;
    }

    const novoProduto = {
        id: Date.now(),
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        fornecedor: {
            nome: nomeFornecedor || "Não informado",
            telefone: telefoneFornecedor || "-"
        }
    };

    produtos.unshift(novoProduto); // Insere no início para visibilidade imediata
    renderizarTabela();
    formProduto.reset();

    mostrarNotificacao(`Produto "${nome}" cadastrado com sucesso!`, "sucesso");
});

// Inicialização da Tabela
renderizarTabela();
