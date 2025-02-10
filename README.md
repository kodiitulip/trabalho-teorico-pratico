# Trabalho da Disciplina de Autoração Multimídia II

## Informações do Curso e Equipe

- **Universidade:** Universidade Federal do Ceará
- **Curso:** Bacharelado em Sistemas e Mídias Digitais
- **Disciplina:** Autoração Multimídia II
- **Professor:** Wellington Wagner Ferreira Sarmento
- **Equipe:** KJC
- **Integrantes:**
  - Clara Lívia Moura de Oliveira - Matrícula: 554010
  - Jacó Pinto Farias Mota Filho - Matrícula: 389775
  - Kodie Freitas Sales - Matrícula: 561525

---

### Questões 01 - 05:

- [Questões]("./questoes01a05.md")

---

### **Questão 06: Alert Box**

**Objetivo:** Criar um botão que exibe um alertbox quando clicado.

#### Explicação:

- O código utiliza a função `alert()` para mostrar a alert box.
- A função `addEventListener()` permite adicionar uma função ao event de click do botão.

#### Código:

- [Ver código no GitHub](./questao06/)

---

### **Questão 07: Validação de formulários**

**Objetivo:** Validar os valores de um formulário antes de enviar os dados.

#### Explicação:

- O código utiliza a função `addEventListener()` para adicionar funções aos eventos de input.
- A função `setCustomValidity()` permite adicionar uma mensage de validação customizada a um elemento input, o que faria o input se tornar inválido.

#### Código:

- [Ver código no GitHub](./questao07/)

---

### **Questão 08: SinglePageApp com innerHTML**

**Objetivo:** Criar uma "aplicação" de página única modificando o `innerHTML` de um container.

#### Explicação:

- O código utiliza a funções customizadas que retornam uma string com a página a ser renderizada, e uma função `init()` que faria as Considerações necessárias para aquela página.
- O código principal modificaria o `innerHTML` de um container com as strings retornadas das funções customizadas.

#### Código:

- [Ver código no GitHub](./questao08/)

---

### **Questão 09: SinglePageApp HistoryAPI**

**Objetivo:** Utilizar HistoryAPI para uma aplicação estilo SPA.

#### Explicação:

- O código utiliza a HistoryAPI para alterar a url do usuário sem ocorrer recaregamento de página.
- A função `pushState` permite enviar um novo caminho para url sem recaregar a página
- O evento `popstate` permite detectar quando ocorreu um `pushState` ou `replaceState`, permitindo rodar códigos apos alguma mudança na url
- O código utiliza uma função customizada `router()` para detectar qual a url que o usuário está e renderizar a página requisitada.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/spa-vanilla-javascript)

---

### **Questão 11: Exibição dinâmica de data e hora**

**Objetivo:** Criar uma página que exiba a data e hora atuais e as atualize dinamicamente a cada segundo.

#### Explicação:

- O código utiliza a função `setInterval` para atualizar a data e hora a cada segundo.
- A função `new Date()` captura a data e hora atuais, e `toLocaleString()` formata o valor para o padrão local.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao11)

---

### **Questão 12: Menu dropdown para dispositivos touch e mouse**

**Objetivo:** Criar um menu dropdown que funcione tanto em dispositivos com mouse quanto em dispositivos touch, aplicando estilos diferentes para cada tipo de interação.

#### Explicação:

- O menu dropdown usa eventos de `mouseover`, `mouseout` e `touchstart` para alternar entre as classes CSS `.hover` e `.active`.
- O CSS controla a exibição do conteúdo do dropdown com `display: none` e `display: block`.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao12)

---

### **Questão 13: Consumo de API com fetch**

**Objetivo:** Consumir uma API externa, tratar a resposta e exibir os dados na página, lidando com possíveis erros.

#### Explicação:

- A função `fetch` faz uma requisição à API e trata a resposta com `.then` e `.catch`.
- Em caso de sucesso, os dados são exibidos no elemento `#conteudo`.
- Em caso de erro, uma mensagem de erro é exibida.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao13)

---

### **Questão 14: Comparação entre localStorage, sessionStorage e IndexedDB**

**Objetivo:** Demonstrar o uso de `localStorage`, `sessionStorage` e `IndexedDB` em uma aplicação simples que armazena e recupera dados.

#### Explicação:

- **localStorage:** Armazena dados de forma persistente (até serem explicitamente removidos).
- **sessionStorage:** Armazena dados apenas durante a sessão do navegador.
- **IndexedDB:** Armazena grandes volumes de dados de forma estruturada (tipo banco de dados NoSQL).

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao14)

---

### **Questão 15: Configuração de Service Worker e PWA**

**Objetivo:** Configurar um Service Worker para cachear arquivos e fornecer uma experiência offline, além de criar um manifesto PWA.

#### Explicação:

- O Service Worker cacheia arquivos estáticos durante a instalação e os serve quando o usuário está offline.
- O manifesto PWA permite que o aplicativo seja instalado no dispositivo do usuário.
- O CSS e o JavaScript são usados para estilizar e registrar o Service Worker, respectivamente.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao15)

---

## Como Executar o Projeto

1. Clone o repositório do GitHub:
   ```bash
   git clone https://github.com/kodiitulip/trabalho-teorico-pratico.git
   ```
2. Navegue até a pasta da questão desejada:
   ```bash
   cd trabalho-teorico-pratico/questao11
   ```
3. Abra o arquivo `index.html` em um navegador.

---

## Link do Repositório no GitHub

[Clique aqui para acessar o repositório no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico)

---

## Considerações Finais

Este trabalho demonstra a aplicação prática de conceitos de HTML, CSS, JavaScript e APIs modernas, como Service Workers e IndexedDB. Cada questão foi desenvolvida com foco em boas práticas de programação, organização de código e acessibilidade.

Agradecemos pela oportunidade de aprimorar nossos conhecimentos em Autoração Multimídia II.

---

**2025, Equipe KJC ©**
