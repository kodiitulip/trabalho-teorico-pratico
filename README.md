# Trabalho Teórico-Prático da Disciplina de Autoração Multimídia II

## Informações do Curso e Equipe

- **Universidade:** Universidade Federal do Ceará
- **Curso:** Bacharelado em Sistemas e Mídias Digitais
- **Disciplina:** Autoração Multimídia II
- **Professor:** Wellington Wagner Ferreira Sarmento
- **Equipe:** KJC
- **Integrantes:**
  - **K**odie Freitas Sales - Matrícula: 561525
  - **J**acó Pinto Farias Mota Filho - Matrícula: 389775
  - **C**lara Lívia Moura de Oliveira - Matrícula: 554010

## **Questão 01**

#### Explicação:

- A organização semântica do documento HTML5 traz benefícios significativos tanto para o desenvolvimento quanto para a experiência do usuário. Em primeiro lugar, o uso de tags como `<header>`, `<main>`, `<section>` e `<footer>` cria uma hierarquia clara que facilita a interpretação do conteúdo por navegadores e ferramentas de acessibilidade, melhorando a navegação para usuários com leitores de tela. Essa mesma estruturação semântica favorece a otimização para mecanismos de busca (SEO), pois os robôs de indexação identificam com mais precisão a relevância e organização do conteúdo.

  Além disso, a separação lógica em blocos funcionais - com o cabeçalho dedicado, conteúdo principal isolado em `<main>` e rodapé reservado - simplifica a manutenção do código e a implementação de estilos via CSS. A inclusão da meta tag `viewport` assegura uma base responsiva, permitindo que o layout se adapte naturalmente a diferentes dispositivos. A escalabilidade é outro ponto forte: as seções delimitadas permitem adicionar novos componentes (como mais artigos ou menus) sem comprometer a estrutura existente. Por fim, a legibilidade do código é preservada através da indentação consistente e do uso adequado de elementos semânticos, facilitando colaborações futuras e atualizações no projeto.

#### Função de cada tag principal:

1. **`<!DOCTYPE html>`**
    
    Declaração inicial que define o documento como HTML5.
    
2. **`<html lang="pt-BR">`**
    
    Elemento raiz que envolve todo o documento. O atributo `lang` define o idioma principal da página (português do Brasil).
    
3. **`<head>`**
    
    Contêiner para metadados e configurações não visíveis:
    
    - **`<meta charset="UTF-8">`**: Garante a correta exibição de caracteres especiais
    - **`<meta name="viewport">`**: Otimiza a visualização em dispositivos móveis
    - **`<title>`** Define o título da página (aparece na aba do navegador)
4. **`<body>`**
    
    Contém todo o conteúdo visível da página.
    
5. **`<header>`**
    
    Define o cabeçalho da página. No código:
    
    - Agrupa o título principal (`<h1>`) que identifica o propósito da página
6. **`<main>`**
    
    Delimita o conteúdo principal único da página:
    
    - Deve aparecer apenas uma vez por documento
    - No código, engloba toda a seção de conteúdo relevante
7. **`<section>`**
    
    Cria uma seção temática para agrupamento lógico:
    
    - Organiza o parágrafo descritivo e o link do repositório
    - Permite fácil expansão para novas seções futuras
8. **`<footer>`**
    
    Reserva espaço para o rodapé da página (atualmente vazio, mas pronto para conteúdo futuro como informações de contato ou créditos).

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-01/)

---

## **Questão 02**

#### Explicação:

- Na estruturação semântica do HTML, optamos por utilizar elementos `<section>` para cada bloco de conteúdo temático, garantindo uma organização clara e significativa do documento. Cada seção é identificada com cabeçalhos `<h2>`, mantendo uma hierarquia coerente de títulos (onde o `<h1>` principal precede os `<h2>`) e agrupando conteúdos relacionados de maneira lógica. Essa abordagem não só melhora a acessibilidade como também facilita a interpretação do conteúdo por mecanismos de busca.

  Para a estilização diferenciada dos blocos, desenvolvemos classes CSS reutilizáveis (.destaque, .aviso, .info) que atuam como "skin" visual para cada seção. Essas classes combinam estilos base compartilhados - como margens, preenchimento e arredondamento de bordas - com propriedades específicas: o bloco .destaque recebe um fundo amarelado e borda sólida clara, o .aviso apresenta fundo vermelho claro com borda tracejada em tom contrastante, enquanto o .info utiliza tons azulados com borda sólida mais intensa. O tamanho da fonte e o peso textual foram ajustados individualmente em cada classe para reforçar a identidade visual de cada tipo de conteúdo.

  As vantagens desse método incluem a preservação da semântica documental através do uso adequado de elementos estruturais, a flexibilidade para modificações de estilo através das classes CSS, e a escalabilidade do código para inclusão de novos blocos. A manutenção é simplificada pela separação clara entre estilos genéricos (aplicados a todas as sections) e específicos (definidos por classe), permitindo ajustes pontuais sem afetar o layout geral.

  Entre as boas práticas adotadas, destacamos a preferência por classes em vez de IDs para estilização, garantindo maior reutilização de código. A separação entre estilos estruturais base e características visuais específicas promove um código mais organizado, enquanto o uso de unidades relativas (em) assegura melhor adaptação a diferentes dispositivos. As cores foram selecionadas priorizando a legibilidade e contraste adequado, seguindo diretrizes de acessibilidade web, e a estrutura CSS foi planejada para permitir sobreposição controlada de estilos quando necessário.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-02/)

---

## **Questão 03**

### 3.1. Adicionar `padding-top` ao conteúdo principal

#### Explicação:

- **Vantagens:**
  - **Simplicidade:** Apenas adiciona uma linha de CSS ao `<main>`.
  - **Controle preciso:** Mantém o conteúdo alinhado independentemente do scroll.

- **Desvantagens:**
  - **Dependência de valor fixo:** Se a altura do header mudar (ex.: em dispositivos móveis), o `padding-top` precisará ser ajustado manualmente.
  - **Potencial sobreposição:** Se o header não tiver uma cor de fundo definida, o conteúdo pode aparecer por trás dele durante o scroll.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-03/parte-01)

---

### 3.2. Usando elemento spacer

#### Explicação:

- **Vantagens:**
  - **Responsividade facilitada:** Se a altura do header mudar via media queries, o spacer se ajusta automaticamente.
  - **Sem afetar o `<main>`:** Não requer modificação no padding do conteúdo principal.
- **Desvantagens:**
  - **Elemento não semântico:** Adiciona um elemento HTML apenas para ajuste visual.
  - **Manutenção:** Requer sincronização manual entre a altura do header e do spacer.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-03/parte-02)

---

## **Questão 04**

### 4.1. Exemplo de CSS Mobile First

Nesta abordagem, iniciamos com estilos para dispositivos móveis e usamos `min-width` em media queries para adaptar o layout a telas maiores.

#### Lógica:

- Mobile (base): As seções são exibidas em uma coluna (`display: block`).
- Tablets (768px+): O layout vira um grid de 2 colunas.
- Desktop (1024px+): O grid expande para 3 colunas.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-04/parte-01)

---

### 4.2 Abordagem Desktop First

Aqui, iniciamos com estilos para desktop e usamos `max-width` em media queries para ajustar o layout a telas menores.

#### Lógica:

- Desktop (base): Layout em grid de 3 colunas.
- Tablets (1024px-): Grid reduz para 2 colunas.
- Mobile (768px-): Layout volta para coluna única (`display: block`).

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-04/parte-02)

---

## **Questão 05**

#### Explicação:

- **Importância das Tags Semânticas para Acessibilidade e SEO**

  - O uso de tags semânticas do HTML5 é fundamental tanto para acessibilidade quanto para SEO. Na **acessibilidade**, elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` funcionam como *landmarks* (marcos de navegação), permitindo que usuários de leitores de tela identifiquem rapidamente a estrutura da página. Por exemplo, um `<header>` define o cabeçalho, enquanto `<main>` delimita o conteúdo principal, ajudando na navegação por atalhos. A hierarquia de cabeçalhos (`<h1>` a `<h2>`) também orienta usuários sobre a relação entre os títulos e subtítulos, essencial para compreensão do contexto. Já para o **SEO**, essas tags facilitam que mecanismos de busca interpretem a relevância do conteúdo. Um `<article>` indica conteúdo autônomo (como um post), enquanto `<section>` agrupa temas relacionados, permitindo que algoritmos identifiquem palavras-chave em contextos específicos. Além disso, a estrutura semântica reduz a taxa de rejeição, pois páginas acessíveis tendem a reter melhor os usuários, sinalizando qualidade aos buscadores.

- **Validação para Conformidade com WCAG e Boas Práticas de SEO**

  - Para validar a **acessibilidade**, é essencial:

    1. **Ferramentas automatizadas** (como o Lighthouse ou o WAVE), que verificam contrastes de cores, hierarquia de cabeçalhos, presença de *alt texts* em imagens e uso adequado de landmarks.
    2. **Testes manuais** com navegação por teclado (para garantir que todos os elementos interativos sejam acessíveis via `Tab`) e leitores de tela (como NVDA ou VoiceOver), confirmando se a estrutura semântica é anunciada corretamente.
    3. **Critérios WCAG específicos**, como o 1.3.1 (Info and Relationships), que exige que a estrutura visual corresponda à semântica, e o 2.4.6 (Headings and Labels), que demanda títulos descritivos.

  - Para o **SEO**, a validação inclui:

    1. **Análise técnica** com o Google Lighthouse, verificando meta tags (como `description`), *title tags* otimizadas e estrutura de cabeçalhos.
    2. **Testes de responsividade** (via DevTools do navegador), garantindo que o layout se adapte a dispositivos móveis.
    3. **Verificação de desempenho**, como carregamento lento de imagens (`loading="lazy"`) e compressão de recursos, impactando positivamente no ranking.
    4. **Validação semântica**, assegurando que tags como `<section>` e `<article>` não sejam usadas apenas para estilização, mas para agrupar conteúdo temático.

  A combinação dessas práticas garante que a página seja **inclusiva** (atingindo padrões WCAG AA) e **otimizada para mecanismos de busca**, equilibrando necessidades humanas e algoritmicas

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-05/)

---

## **Questão 06: Alert Box**

**Objetivo:** Criar um botão que exibe um alertbox quando clicado.

#### Explicação:

- O código utiliza a função `alert()` para mostrar a alert box.
- A função `addEventListener()` permite adicionar uma função ao event de click do botão.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-06/)

---

## **Questão 07: Validação de formulários**

**Objetivo:** Validar os valores de um formulário antes de enviar os dados.

#### Explicação:

- O código utiliza a função `addEventListener()` para adicionar funções aos eventos de input.
- A função `setCustomValidity()` permite adicionar uma mensage de validação customizada a um elemento input, o que faria o input se tornar inválido.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-07/)

---

## **Questão 08: SinglePageApp com innerHTML**

**Objetivo:** Criar uma "aplicação" de página única modificando o `innerHTML` de um container.

#### Explicação:

- O código utiliza a funções customizadas que retornam uma string com a página a ser renderizada, e uma função `init()` que faria as Considerações necessárias para aquela página.
- O código principal modificaria o `innerHTML` de um container com as strings retornadas das funções customizadas.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-08/)

---

## **Questão 09: SinglePageApp HistoryAPI**

**Objetivo:** Utilizar HistoryAPI para uma aplicação estilo SPA.

#### Explicação:

- O código utiliza a HistoryAPI para alterar a url do usuário sem ocorrer recaregamento de página.
- A função `pushState` permite enviar um novo caminho para url sem recaregar a página
- O evento `popstate` permite detectar quando ocorreu um `pushState` ou `replaceState`, permitindo rodar códigos apos alguma mudança na url
- O código utiliza uma função customizada `router()` para detectar qual a url que o usuário está e renderizar a página requisitada.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/spa-vanilla-javascript)
  
---

## **Questão 11: Exibição dinâmica de data e hora**

**Objetivo:** Criar uma página que exiba a data e hora atuais e as atualize dinamicamente a cada segundo.

#### Explicação:

- O código utiliza a função `setInterval` para atualizar a data e hora a cada segundo.
- A função `new Date()` captura a data e hora atuais, e `toLocaleString()` formata o valor para o padrão local.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-11)

---

## **Questão 12: Menu dropdown para dispositivos touch e mouse**

**Objetivo:** Criar um menu dropdown que funcione tanto em dispositivos com mouse quanto em dispositivos touch, aplicando estilos diferentes para cada tipo de interação.

#### Explicação:

- O menu dropdown usa eventos de `mouseover`, `mouseout` e `touchstart` para alternar entre as classes CSS `.hover` e `.active`.
- O CSS controla a exibição do conteúdo do dropdown com `display: none` e `display: block`.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-12)

---

## **Questão 13: Consumo de API com fetch**

**Objetivo:** Consumir uma API externa, tratar a resposta e exibir os dados na página, lidando com possíveis erros.

#### Explicação:

- A função `fetch` faz uma requisição à API e trata a resposta com `.then` e `.catch`.
- Em caso de sucesso, os dados são exibidos no elemento `#conteudo`.
- Em caso de erro, uma mensagem de erro é exibida.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-13)

---

## **Questão 14: Comparação entre localStorage, sessionStorage e IndexedDB**

**Objetivo:** Demonstrar o uso de `localStorage`, `sessionStorage` e `IndexedDB` em uma aplicação simples que armazena e recupera dados.

#### Explicação:

- **localStorage:** Armazena dados de forma persistente (até serem explicitamente removidos).
- **sessionStorage:** Armazena dados apenas durante a sessão do navegador.
- **IndexedDB:** Armazena grandes volumes de dados de forma estruturada (tipo banco de dados NoSQL).

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-14)

---

## **Questão 15: Configuração de Service Worker e PWA**

**Objetivo:** Configurar um Service Worker para cachear arquivos e fornecer uma experiência offline, além de criar um manifesto PWA.

#### Explicação:

- O Service Worker cacheia arquivos estáticos durante a instalação e os serve quando o usuário está offline.
- O manifesto PWA permite que o aplicativo seja instalado no dispositivo do usuário.
- O CSS e o JavaScript são usados para estilizar e registrar o Service Worker, respectivamente.

#### Código:

- [Ver código no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main/questao-15)

---

## Link do Repositório no GitHub

[Clique aqui para acessar o repositório no GitHub](https://github.com/kodiitulip/trabalho-teorico-pratico)

---

## Considerações Finais

Este trabalho demonstra a aplicação prática de conceitos de HTML, CSS, JavaScript e APIs modernas, como Service Workers e IndexedDB. Cada questão foi desenvolvida com foco em boas práticas de programação, organização de código e acessibilidade.

---

**2025, Equipe KJC ©**
