# Atividades Autoração Multimídia II

## **Questão 1**

A organização semântica do documento HTML5 traz benefícios significativos tanto para o desenvolvimento quanto para a experiência do usuário. Em primeiro lugar, o uso de tags como `<header>`, `<main>`, `<section>` e `<footer>` cria uma hierarquia clara que facilita a interpretação do conteúdo por navegadores e ferramentas de acessibilidade, melhorando a navegação para usuários com leitores de tela. Essa mesma estruturação semântica favorece a otimização para mecanismos de busca (SEO), pois os robôs de indexação identificam com mais precisão a relevância e organização do conteúdo.

Além disso, a separação lógica em blocos funcionais - com o cabeçalho dedicado, conteúdo principal isolado em `<main>` e rodapé reservado - simplifica a manutenção do código e a implementação de estilos via CSS. A inclusão da meta tag `viewport` assegura uma base responsiva, permitindo que o layout se adapte naturalmente a diferentes dispositivos. A escalabilidade é outro ponto forte: as seções delimitadas permitem adicionar novos componentes (como mais artigos ou menus) sem comprometer a estrutura existente. Por fim, a legibilidade do código é preservada através da indentação consistente e do uso adequado de elementos semânticos, facilitando colaborações futuras e atualizações no projeto.

**Função de cada tag principal:**

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
    

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <main>
        <section>
            <p>Bem-vindo à página do grupo KJC, onde iremos disponibilizar as informações sobre o desenvolvimento da atividade avaliativa da cadeira de Autoria Multimídia II. Abaixo, segue o link do nosso repositório no GitHub:</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico" target="_blank">Repositório da atividade do grupo KJC</a>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>
```

## **Questão 2**

Na estruturação semântica do HTML, optamos por utilizar elementos `<section>` para cada bloco de conteúdo temático, garantindo uma organização clara e significativa do documento. Cada seção é identificada com cabeçalhos `<h2>`, mantendo uma hierarquia coerente de títulos (onde o `<h1>` principal precede os `<h2>`) e agrupando conteúdos relacionados de maneira lógica. Essa abordagem não só melhora a acessibilidade como também facilita a interpretação do conteúdo por mecanismos de busca.

Para a estilização diferenciada dos blocos, desenvolvemos classes CSS reutilizáveis (.destaque, .aviso, .info) que atuam como "skin" visual para cada seção. Essas classes combinam estilos base compartilhados - como margens, preenchimento e arredondamento de bordas - com propriedades específicas: o bloco .destaque recebe um fundo amarelado e borda sólida clara, o .aviso apresenta fundo vermelho claro com borda tracejada em tom contrastante, enquanto o .info utiliza tons azulados com borda sólida mais intensa. O tamanho da fonte e o peso textual foram ajustados individualmente em cada classe para reforçar a identidade visual de cada tipo de conteúdo.

As vantagens desse método incluem a preservação da semântica documental através do uso adequado de elementos estruturais, a flexibilidade para modificações de estilo através das classes CSS, e a escalabilidade do código para inclusão de novos blocos. A manutenção é simplificada pela separação clara entre estilos genéricos (aplicados a todas as sections) e específicos (definidos por classe), permitindo ajustes pontuais sem afetar o layout geral.

Entre as boas práticas adotadas, destacamos a preferência por classes em vez de IDs para estilização, garantindo maior reutilização de código. A separação entre estilos estruturais base e características visuais específicas promove um código mais organizado, enquanto o uso de unidades relativas (em) assegura melhor adaptação a diferentes dispositivos. As cores foram selecionadas priorizando a legibilidade e contraste adequado, seguindo diretrizes de acessibilidade web, e a estrutura CSS foi planejada para permitir sobreposição controlada de estilos quando necessário.

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <main>
        <section class="destaque">
            <h2>Introdução</h2>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank">Repositório no GitHub</a>
        </section>

        <section class="aviso">
            <h2>Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info">
            <h2>Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>
```

### **Código CSS:**

```css
section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

.destaque {
    background-color: #fff3cd;
    border: 2px solid #ffecb5;
    font-size: 1.1em;
}

.aviso {
    background-color: #f8d7da;
    border: 2px dashed #dc3545;
    font-size: 0.9em;
    font-weight: bold;
}

.info {
    background-color: #d1ecf1;
    border: 3px solid #0aa2c0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #333;
    margin-top: 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}
```

## **Questão 3**

**1. Adicionar `padding-top` ao conteúdo principal**

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <main>
        <section class="destaque">
            <h2>Introdução</h2>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank">Repositório no GitHub</a>
        </section>

        <section class="aviso">
            <h2>Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info">
            <h2>Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>
```

### **Código CSS:**

```css
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding-left: 20px;
}

main {
  padding-top: 80px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

.destaque {
    background-color: #fff3cd;
    border: 2px solid #ffecb5;
    font-size: 1.1em;
}

.aviso {
    background-color: #f8d7da;
    border: 2px dashed #dc3545;
    font-size: 0.9em;
    font-weight: bold;
}

.info {
    background-color: #d1ecf1;
    border: 3px solid #0aa2c0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #333;
    margin-top: 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}
```

**Vantagens:**

- **Simplicidade:** Apenas adiciona uma linha de CSS ao `<main>`.
- **Controle preciso:** Mantém o conteúdo alinhado independentemente do scroll.

**Desvantagens:**

- **Dependência de valor fixo:** Se a altura do header mudar (ex.: em dispositivos móveis), o `padding-top` precisará ser ajustado manualmente.
- **Potencial sobreposição:** Se o header não tiver uma cor de fundo definida, o conteúdo pode aparecer por trás dele durante o scroll.

**2 - Usando elemento spacer**

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <div class="header-spacer"></div>

    <main>
        <section class="destaque">
            <h2>Introdução</h2>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank">Repositório no GitHub</a>
        </section>

        <section class="aviso">
            <h2>Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info">
            <h2>Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>**
```

### **Código CSS:**

```css
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.header-spacer {
  height: 80px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

.destaque {
    background-color: #fff3cd;
    border: 2px solid #ffecb5;
    font-size: 1.1em;
}

.aviso {
    background-color: #f8d7da;
    border: 2px dashed #dc3545;
    font-size: 0.9em;
    font-weight: bold;
}

.info {
    background-color: #d1ecf1;
    border: 3px solid #0aa2c0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #333;
    margin-top: 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}
```

**Vantagens:**

- **Responsividade facilitada:** Se a altura do header mudar via media queries, o spacer se ajusta automaticamente.
- **Sem afetar o `<main>`:** Não requer modificação no padding do conteúdo principal.

**Desvantagens:**

- **Elemento não semântico:** Adiciona um elemento HTML apenas para ajuste visual.
- **Manutenção:** Requer sincronização manual entre a altura do header e do spacer.

## **Questão 4**

**Exemplo de CSS Mobile First:**

Nesta abordagem, iniciamos com estilos para dispositivos móveis e usamos `min-width` em media queries para adaptar o layout a telas maiores.

### **Código CSS:**

```css
section {
  margin: 20px;
  padding: 15px;
  display: block;
}

@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  main {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.header-spacer {
  height: 80px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

.destaque {
    background-color: #fff3cd;
    border: 2px solid #ffecb5;
    font-size: 1.1em;
}

.aviso {
    background-color: #f8d7da;
    border: 2px dashed #dc3545;
    font-size: 0.9em;
    font-weight: bold;
}

.info {
    background-color: #d1ecf1;
    border: 3px solid #0aa2c0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #333;
    margin-top: 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}
```

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <main>
        <section class="destaque">
            <h2>Introdução</h2>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank">Repositório no GitHub</a>
        </section>

        <section class="aviso">
            <h2>Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info">
            <h2>Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>
```

Lógica:

- Mobile (base): As seções são exibidas em uma coluna (`display: block`).
- Tablets (768px+): O layout vira um grid de 2 colunas.
- Desktop (1024px+): O grid expande para 3 colunas.

**Abordagem Desktop First**

Aqui, iniciamos com estilos para desktop e usamos `max-width` em media queries para ajustar o layout a telas menores.

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questões de Autoração Multimídia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <div class="header-spacer"></div>

    <main>
        <section class="destaque">
            <h2>Introdução</h2>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank">Repositório no GitHub</a>
        </section>

        <section class="aviso">
            <h2>Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info">
            <h2>Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer>
        Grupo KJC - 2025
    </footer>
</body>
</html>
```

### **Código CSS:**

```css
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
}

section {
  margin: 15px;
  padding: 20px;
}

@media (max-width: 1024px) {
  main {
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
  }
}

@media (max-width: 768px) {
  main {
    display: block; 
  }
  section {
    margin: 20px;
    padding: 15px;
  }
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.header-spacer {
  height: 80px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

section {
    margin: 20px;
    padding: 15px;
    border-radius: 8px;
}

.destaque {
    background-color: #fff3cd;
    border: 2px solid #ffecb5;
    font-size: 1.1em;
}

.aviso {
    background-color: #f8d7da;
    border: 2px dashed #dc3545;
    font-size: 0.9em;
    font-weight: bold;
}

.info {
    background-color: #d1ecf1;
    border: 3px solid #0aa2c0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #333;
    margin-top: 0;
}

a {
    color: #0056b3;
    text-decoration: none;
}
```

Lógica:

- Desktop (base): Layout em grid de 3 colunas.
- Tablets (1024px-): Grid reduz para 2 colunas.
- Mobile (768px-): Layout volta para coluna única (`display: block`).

## **Questão 5**

### **Código HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página oficial do Grupo KJC com informações sobre autoria multimídia, prazos e requisitos técnicos">
    <title>Questões de Autoria Multimídia - Grupo KJC</title>
    <style>
        /* Estilos gerais */
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        header {
            background: #0056b3;
            color: white;
            padding: 20px;
            text-align: center;
        }

        main {
            padding: 15px;
        }

        section {
            margin: 20px 0;
            padding: 15px;
            border-radius: 8px;
        }

        .destaque {
            background-color: #fff3cd;
            border: 2px solid #ffecb5;
        }

        .aviso {
            background-color: #f8d7da;
            border: 2px dashed #dc3545;
            font-weight: bold;
        }

        .info {
            background-color: #d1ecf1;
            border: 3px solid #0aa2c0;
        }

        .imagem-grupo {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 15px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .container-imagem {
            text-align: center;
        }

        h1, h2 {
            margin-top: 0;
            color: #333;
        }

        a {
            color: #0056b3;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }

        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 15px;
            position: relative;
            bottom: 0;
            width: 100%;
        }

        @media (max-width: 600px) {
            section {
                margin: 10px 0;
                padding: 10px;
            }
            
            h1 {
                font-size: 1.5em;
            }
            
            .imagem-grupo {
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <header role="banner">
        <h1>Questões de Autoria Multimídia</h1>
    </header>

    <main role="main">
        <section class="destaque" aria-labelledby="introducao">
            <h2 id="introducao">Introdução</h2>
            <div class="container-imagem">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                    alt="Equipe colaborando em computadores com diagramas e wireframes" 
                    class="imagem-grupo"
                    loading="lazy"
                >
            </div>
            <p>Bem-vindo à página do grupo KJC...</p>
            <a href="https://github.com/kodiitulip/trabalho-teorico-pratico/tree/main" target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
        </section>

        <section class="aviso" aria-labelledby="importante">
            <h2 id="importante">Importante</h2>
            <p>Datas de entrega: 09/02/2025</p>
            <p>Formato: Arquivo do tipo Markdown no GitHub.</p>
        </section>

        <section class="info" aria-labelledby="detalhes">
            <h2 id="detalhes">Detalhes Técnicos</h2>
            <p>Tecnologias utilizadas: HTML5, CSS3</p>
            <p>Responsividade obrigatória</p>
        </section>
    </main>

    <footer role="contentinfo">
        <p>Grupo KJC - 2025</p>
    </footer>
</body>
</html>
```

**Importância das Tags Semânticas para Acessibilidade e SEO**

O uso de tags semânticas do HTML5 é fundamental tanto para acessibilidade quanto para SEO. Na **acessibilidade**, elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` funcionam como *landmarks* (marcos de navegação), permitindo que usuários de leitores de tela identifiquem rapidamente a estrutura da página. Por exemplo, um `<header>` define o cabeçalho, enquanto `<main>` delimita o conteúdo principal, ajudando na navegação por atalhos. A hierarquia de cabeçalhos (`<h1>` a `<h2>`) também orienta usuários sobre a relação entre os títulos e subtítulos, essencial para compreensão do contexto. Já para o **SEO**, essas tags facilitam que mecanismos de busca interpretem a relevância do conteúdo. Um `<article>` indica conteúdo autônomo (como um post), enquanto `<section>` agrupa temas relacionados, permitindo que algoritmos identifiquem palavras-chave em contextos específicos. Além disso, a estrutura semântica reduz a taxa de rejeição, pois páginas acessíveis tendem a reter melhor os usuários, sinalizando qualidade aos buscadores.

**Validação para Conformidade com WCAG e Boas Práticas de SEO**

Para validar a **acessibilidade**, é essencial:

1. **Ferramentas automatizadas** (como o Lighthouse ou o WAVE), que verificam contrastes de cores, hierarquia de cabeçalhos, presença de *alt texts* em imagens e uso adequado de landmarks.
2. **Testes manuais** com navegação por teclado (para garantir que todos os elementos interativos sejam acessíveis via `Tab`) e leitores de tela (como NVDA ou VoiceOver), confirmando se a estrutura semântica é anunciada corretamente.
3. **Critérios WCAG específicos**, como o 1.3.1 (Info and Relationships), que exige que a estrutura visual corresponda à semântica, e o 2.4.6 (Headings and Labels), que demanda títulos descritivos.

Para o **SEO**, a validação inclui:

1. **Análise técnica** com o Google Lighthouse, verificando meta tags (como `description`), *title tags* otimizadas e estrutura de cabeçalhos.
2. **Testes de responsividade** (via DevTools do navegador), garantindo que o layout se adapte a dispositivos móveis.
3. **Verificação de desempenho**, como carregamento lento de imagens (`loading="lazy"`) e compressão de recursos, impactando positivamente no ranking.
4. **Validação semântica**, assegurando que tags como `<section>` e `<article>` não sejam usadas apenas para estilização, mas para agrupar conteúdo temático.

A combinação dessas práticas garante que a página seja **inclusiva** (atingindo padrões WCAG AA) e **otimizada para mecanismos de busca**, equilibrando necessidades humanas e algoritmicas
