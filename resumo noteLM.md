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
