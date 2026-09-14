A **Programação Orientada a Objetos (POO)** em Java é explicada no material através de uma metáfora simples: aproximar a forma como escrevemos código da forma como pensamos no mundo real.

---

### 1\. Por que a POO foi criada?

Antigamente, usava-se a **Programação Estruturada**, que organizava o código de forma linear e sequencial. Conforme os sistemas foram crescendo, ficou muito difícil manter o código organizado e reutilizar partes dele. A POO surgiu justamente para resolver essa complexidade, permitindo **reaproveitar código**, separar responsabilidades e deixar os sistemas mais flexíveis e robustos.

---

### 2\. Os Pilares Fundamentais: Classes e Objetos

* **Classe (O Molde)**: É a receita, o esquema ou a planta baixa. Ela não é o objeto em si, mas define quais informações ele terá e o que poderá fazer.
* **Objeto (A Coisa Real / Instância)**: É o item concreto criado a partir do molde. Por exemplo, "Carro" é a classe, enquanto o "Carro vermelho de placa ABC-1234" é um objeto.

Um objeto é composto por três coisas:

1. **Estado (Atributos)**: São as características guardadas em variáveis (ex.: uma lâmpada estar *acesa* ou *apagada*, ou um carro ter *marca* e *cor*).
2. **Comportamento (Métodos)**: São as ações e funções que ele executa (ex.: *acender()* a lâmpada, *somar()* números ou *sacar()* dinheiro de uma conta).
3. **Identidade**: Cada objeto é único no sistema, mesmo que tenha as mesmas características de outro.

---

### 3\. Criando Objetos e Construtores

* **Operador** **new**: É a instrução usada para instanciar (fabricar) um novo objeto a partir de uma classe.
* **Construtor**: É um método especial executado automaticamente pelo `new` no momento em que o objeto nasce, servindo para preparar e inicializar seus dados padrão.

---

### 4\. Encapsulamento e Abstração (Proteção do Código)

* **Abstração**: Significa focar no que é essencial para o sistema e ignorar detalhes irrelevantes.
* **Encapsulamento**: É o ato de "esconder" a engrenagem interna do objeto. Em vez de deixar qualquer um alterar os dados diretamente, definimos níveis de **visibilidade**:
  * **private**: Apenas a própria classe pode mexer (usado para proteger os atributos).
  * **public**: Qualquer parte do programa pode acessar (usado para os métodos que os outros precisam usar).
  * **protected** **e** **default**: Restringem o acesso a subclasses ou ao mesmo pacote.

---

### 5\. Relacionamento entre Objetos

Os objetos não trabalham sozinhos; eles se conectam. Em vez de colocar todas as informações em uma classe só (o que geraria bagunça e repetição de dados)[17], dividimos o sistema em classes menores e relacionamos umas às outras.

* *Exemplo*: Um `Produto` possui uma `Categoria`, e um `Fornecedor` possui um `Endereco`.

---

### 6\. Pacotes (`package`)

Pacotes nada mais são do que **pastas** para organizar as classes do projeto[22]. Eles evitam que classes com o mesmo nome entrem em conflito e mantêm sistemas grandes (com dezenas de arquivos) bem organizados.

---

### 7\. Herança (`extends`)

A herança evita que você tenha que "reinventar a roda" ou copiar e colar código.

* Criamos uma **Superclasse (classe pai)** mais genérica e **Subclasses (classes filhas)** mais especializadas.
* As filhas **herdam** todos os atributos e métodos do pai.
* *Exemplo*: Em vez de repetir os campos `nome`, `cpf` e `salario` dentro das classes `Gerente` e `Desenvolvedor`, criamos a classe pai `Funcionario` com esses dados e fazemos `Gerente` e `Desenvolvedor` herdarem dela.
* No Java, usam-se as palavras **extends** para herdar e **super** para acessar construtores ou métodos do pai. Todas as classes no Java herdam automaticamente de uma classe-mãe universal chamada `Object`.

---

### 1. Declaração de Classe e Atributos (Estrutura Básica)
Para definir a estrutura de um objeto no código, declaramos uma **classe** que servirá como seu molde. Dentro do corpo da classe, inserimos os **atributos** (variáveis de instância) que armazenam as características do objeto durante sua execução. 

Por convenção de código, os nomes de atributos e métodos iniciam com letra minúscula e adotam o padrão *camelCase* para palavras compostas.

```java
public class Lampada {
    boolean estado; // Atributo apenas declarado
    
    // Também é possível inicializar o atributo na própria declaração:
    // boolean estado = true;
}
```

---

### 2. Métodos (Ações e Comportamentos)
Os **métodos** implementam as ações que o objeto pode executar. O código dentro do método fica delimitado por chaves `{ }` e pode não retornar valor (`void`) ou calcular e retornar uma informação com a palavra **`return`**.

```java
public class Calculadora {
    // Método void: executa uma ação sem retornar dados
    public void acenderLampada() {
        estadoLampada = true;
    }

    // Método com retorno int: recebe dois parâmetros e devolve o resultado
    public int somar(int a, int b) {
        int resultado = a + b;
        return resultado;
    }
}
```

---

### 3. Criação de Objetos com `new`, Construtores e `this`
Para criar uma instância concreta da classe na memória, utiliza-se o operador **`new`**. O **construtor** é um método especial chamado pelo `new` que inicializa o objeto. A palavra reservada **`this`** é utilizada dentro da classe para diferenciar o atributo do objeto da variável local ou parâmetro do método.

```java
public class ContaBanco {
    String nome;
    String cpf;
    double saldo;

    // Construtor parametrizado para receber dados na criação do objeto
    public ContaBanco(String nome, String cpf, double saldo) {
        this.nome = nome;   // 'this.nome' refere-se ao atributo da classe
        this.cpf = cpf;    
        this.saldo = saldo;
    }

    public void sacar(double valor) {
        this.saldo = this.saldo - valor; // Atualiza o atributo saldo
    }
}

// Classe de teste com o método main para instanciar e testar o objeto:
public class TesteContaBanco {
    public static void main(String[] args) {
        // O operador 'new' executa o construtor parametrizado
        ContaBanco conta1 = new ContaBanco("Bruno", "123", 200.00);
        
        // Chamada do método sacar sobre o objeto criado
        conta1.sacar(50.00);
    }
}
```

---

### 4. Encapsulamento (`private`, `get`, `set` e `toString`)
Para proteger o acesso direto às variáveis de instância, definimos os atributos como **`private`**. A leitura e a alteração dos dados são controladas através dos métodos públicos **`get`** (para consultar) e **`set`** (para alterar). O método **`toString()`** pode ser implementado para customizar a exibição textual do objeto.

```java
public class ContaBanco {
    // Atributos privados visíveis apenas dentro desta classe
    private String nome;
    private String cpf;
    private double saldo;

    // Método GET: retorna o valor do atributo privado
    public String getNome() {
        return this.nome;
    }

    // Método SET: altera o valor do atributo privado
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Sobrescrita do método toString para exibição do objeto
    public String toString() {
        return "Nome: " + this.nome;
    }
}
```

---

### 5. Relacionamento entre Objetos e Chamadas em Cadeia
Para evitar a repetição de dados e campos genéricos em uma mesma classe, criamos classes separadas e definimos referências de um objeto dentro de outro (associação/composição).

```java
// Classe independente Categoria
public class Categoria {
    private int id;
    private String nome;

    public Categoria(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public String getNome() { return this.nome; }
}

// Classe Produto relacionada com Categoria e Fornecedor
public class Produto {
    private String nome;
    private double valor;
    private Categoria categoria; // Atributo do tipo Categoria
    private Fornecedor fornecedor; // Atributo do tipo Fornecedor

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Categoria getCategoria() { return this.categoria; }
    public Fornecedor getFornecedor() { return this.fornecedor; }
}

// Execução e acesso encadeado:
public class Teste {
    public static void main(String[] args) {
        Categoria c1 = new Categoria(1, "Informática");
        Produto p1 = new Produto();
        p1.setCategoria(c1); // Associa o objeto Categoria ao Produto

        // Acessa o nome da Categoria a partir do objeto Produto:
        System.out.println(p1.getCategoria().getNome());

        // Navegação em cadeia acessando a cidade do Endereço do Fornecedor:
        System.out.println(p1.getFornecedor().getEndereco().getCidade());
    }
}
```

---

### 6. Uso de Arrays dentro de Objetos
Quando um objeto precisa armazenar múltiplos valores (como uma lista de telefones de um fornecedor), utilizamos **arrays** como atributos da classe. A manipulação das posições pode ser feita diretamente por métodos da própria classe.

```java
public class Fornecedor {
    private String[] telefones; // Declaração de array como atributo

    // Construtor sem parâmetros inicializando o tamanho do array
    public Fornecedor() {
        telefones = new String;
    }

    // Método para alterar o valor do array em uma posição específica
    public void alterarTelefone(String telefone, int posicao) {
        this.telefones[posicao] = telefone;
    }

    public String[] getTelefones() {
        return telefones;
    }
}

// Uso na classe de teste:
public class TesteArray {
    public static void main(String[] args) {
        Fornecedor f1 = new Fornecedor();
        f1.alterarTelefone("84 66666-6666", 1);

        // Acesso direto ao elemento do array retornado pelo getter:
        System.out.println(f1.getTelefones());
    }
}
```

---

### 7. Herança na Prática (`extends` e `super`)
A **herança** permite que subclasses especializadas reutilizem o código de uma superclasse mais genérica através da palavra reservada **`extends`**. Caso a superclasse utilize um construtor parametrizado, a subclasse repassa esses valores ao pai usando a instrução **`super(...)`**.

```java
// Pacote onde a classe está localizada
package br.edu.ifrn.aula;

// Superclasse (Classe Pai)
public class ClasseA {
    private int a;

    public ClasseA(int a) {
        this.a = a;
    }

    public int getA() { return this.a; }
}

// Subclasse (Classe Filha) herdando de ClasseA
package br.edu.ifrn.aula;

public class ClasseB extends ClasseA { // 'extends' ativa a herança
    private int b;

    public ClasseB(int a, int b) {
        super(a); // Executa o construtor da superclasse passando o parâmetro 'a'
        this.b = b;
    }

    public int getB() { return this.b; }
}
```
Aqui estão exemplos práticos extraídos dos cenários e atividades abordados no material, explicados passo a passo de forma simples:

---

### 1. Modelando Coisas do Mundo Real (Classes, Atributos e Métodos)
A POO mapeia objetos do mundo real diretamente para o código. Um objeto possui **atributos** (suas características ou estado) e **métodos** (suas ações ou comportamento).

**Exemplo Prático: O Celular e o Carro**
Quando pensamos em um carro, ele tem características como marca, modelo, cor e quilometragem, além de ações como andar.

```java
public class Carro {
    // Atributos (Características)
    String marca;
    String modelo;
    double quilometragem;

    // Método (Ação) - Atualiza a quilometragem ao andar
    public void andar(double kmPercorrida) {
        this.quilometragem = this.quilometragem + kmPercorrida; // Atualiza o estado interno
    }

    // Método que retorna a quilometragem atual do carro
    public double getQuilometragem() {
        return this.quilometragem; //
    }
}
```
* **Como entender de forma fácil**: A classe `Carro` é a planta do veículo. O método `andar()` simula o uso do carro: toda vez que você roda uma distância, o odômetro (a variável `quilometragem`) soma aquele valor.

---

### 2. Encapsulamento e Proteção com Métodos Privados
O encapsulamento esconde os detalhes internos para proteger o sistema contra alterações indevidas ou acidentais.

#### Exemplo A: Conta de Banco sem Saldo Negativo
Em um sistema bancário, o atributo `saldo` é definido como **`private`** para que ninguém mude seu valor diretamente (ex.: `conta.saldo = 1000000;`). O dinheiro só muda através de métodos seguros como `sacar()` ou `depositar()`.

```java
public class ContaBanco {
    private double saldo; // Atributo protegido

    public void sacar(double valor) {
        // Validação: não permite que o saldo fique negativo
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor; //
        } else {
            System.out.println("Saldo insuficiente!");
        }
    }
}
```

#### Exemplo B: Métodos Auxiliares Privados (`Aluno`)
Se você tem uma classe `Aluno` que precisa calcular a situação no curso (média \\(\ge\\) 6) e a aprovação em um projeto de pesquisa (média \\(\ge\\) 7), o cálculo da média se repetiria nos dois métodos. A solução é criar um método **`private`** para calcular a média, que serve apenas como um "auxiliar interno" para os outros métodos da classe.

```java
public class Aluno {
    private double nota1;
    private double nota2;

    // Método interno privado: ninguém de fora precisa chamar este método diretamente
    private double calcularMedia() {
        return (nota1 + nota2) / 2; //
    }

    public String situacaoCurso() {
        if (calcularMedia() >= 6) { // Reutiliza a média calculada
            return "APROVADO";
        } else {
            return "REPROVADO";
        }
    }

    public String situacaoProjeto() {
        if (calcularMedia() >= 7) { // Reutiliza o mesmo cálculo
            return "PARTICIPA";
        } else {
            return "NÃO PARTICIPA";
        }
    }
}
```

---

### 3. Relacionamento entre Objetos (Produto, Categoria e Endereço)
Em vez de colocar todas as informações em um único arquivo de texto ou tabela — o que causaria bagunça, repetição de dados e falhas na alteração de informações —, dividimos as responsabilidades entre objetos que se conectam.

* Se colocássemos o nome do endereço inteiro dentro do `Fornecedor`, os dados ficariam desorganizados e difíceis de consultar. Por isso, criamos a classe `Endereco` separada e conectamos ela ao `Fornecedor`.

```java
// Classe Endereco com campos organizados
public class Endereco {
    private String logradouro;
    private int numero;
    private String cidade;

    public Endereco(String logradouro, int numero, String cidade) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
    }

    public String getCidade() { return this.cidade; }
}

// Classe Fornecedor utilizando um objeto Endereco
public class Fornecedor {
    private String nome;
    private Endereco endereco; // Relacionamento com a classe Endereco

    public Fornecedor(String nome, Endereco endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    public Endereco getEndereco() { return this.endereco; }
}

// Navegando pelos objetos em cadeia:
// f1.getEndereco().getCidade(); -> Pega o fornecedor, entra no endereço dele e busca a cidade
```

---

### 4. Herança: Reutilizando Código sem Repetição (`extends` e `super`)
Quando temos classes diferentes que compartilham as mesmas características (como `Gerente` e `Desenvolvedor`, que são ambos tipos de `Funcionario`), criamos uma **superclasse** com o que é comum e usamos **`extends`** nas subclasses.

```java
// Superclasse (Pai)
public class Funcionario {
    private String nome;
    private String cpf;
    private double salario;

    // Construtor pai
    public Funcionario(String nome, String cpf, double salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }
}

// Subclasse (Filha) - Herda nome, cpf e salario de Funcionario
public class Gerente extends Funcionario { //
    private String senha; // Atributo específico do Gerente

    public Gerente(String nome, String cpf, double salario, String senha) {
        super(nome, cpf, salario); // 'super' envia os dados para o construtor do pai inicializar
        this.senha = senha;
    }

    public boolean autenticar(String senhaInformada) {
        return this.senha.equals(senhaInformada); //
    }
}
```
* **Como entender de forma fácil**: O `Gerente` herda tudo o que um `Funcionario` genérico tem (nome, CPF, salário). Usamos a instrução **`super(...)`** para repassar os dados básicos ao pai, permitindo que a filha foque apenas nas suas próprias regras exclusivas (como a `senha` e a ação de `autenticar()`).

---


