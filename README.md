# GabrielPortfolio

Portfólio pessoal — apresentação de projetos, stack técnica e contato.

Site estático construído em **HTML5 + CSS3 + JavaScript (ES Modules)** puro, empacotado com **Vite 7**. Sem frameworks de UI: foco em performance, semântica e código auditável.

## Funcionalidades

- Filtro dinâmico de projetos (busca com normalização de texto, categoria e nível)
- - Componentização em módulos reutilizáveis (header, footer, cards de projeto)
  - - Design system com tokens de estilo (`src/styles/tokens.css`)
    - - Layout responsivo
     
      - ## Estrutura
     
      - ```
        app/
          index.html              # entrada
          public/                 # assets estáticos
          src/
            main.js               # bootstrap + filtros
            components/           # header, footer, render de projetos
            data/projects.js      # dados dos projetos
            styles/               # tokens, base, components, sections
        ```

        ## Como rodar

        ```bash
        cd app
        npm install
        npm run dev       # http://localhost:5173
        npm run build     # bundle de produção em dist/
        ```

        ## Contato

        - LinkedIn: https://linkedin.com/in/gabriel-dos-santos-dias-1733161b3
        - - GitHub: https://github.com/GabrielSantos-1
