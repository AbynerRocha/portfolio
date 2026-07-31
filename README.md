<div align="center">
  <img src="./public/favicon.svg" alt="Ícone do portfólio" width="72" height="72" />

  # Portfólio — Abyner Rocha

  Portfólio pessoal de um desenvolvedor back-end, criado para apresentar experiência, projetos e formas de contato em uma interface responsiva com identidade inspirada em código.

  [Português](./README.md) · [English](./README.en.md)
</div>

## Sobre o projeto

Este repositório contém o código do meu portfólio pessoal. A aplicação reúne uma apresentação profissional, informações sobre mim, projetos em destaque e canais de contato em uma experiência de página única disponível em português e inglês.

O design utiliza uma paleta escura, tipografia voltada ao universo de desenvolvimento e componentes responsivos para desktop e dispositivos móveis.

## Funcionalidades

- Layout responsivo para desktop e mobile.
- Conteúdo em português e inglês com i18next.
- Navegação por seções com indicação da seção ativa.
- Apresentação profissional em formato inspirado em código.
- Projeto em destaque com imagem, funcionalidades, tecnologias e repositório.
- Cards preparados para múltiplos projetos.
- Seção de contato com e-mail, GitHub e LinkedIn.
- Favicon próprio baseado na paleta visual do portfólio.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| React 19 | Construção da interface |
| TypeScript | Tipagem e desenvolvimento da aplicação |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS 4 | Estilização e responsividade |
| TanStack Router | Roteamento baseado em arquivos |
| i18next | Internacionalização |
| Lucide e React Icons | Ícones da interface |
| Biome | Formatação e análise estática |

## Estrutura principal

```text
new-portfolio/
├── locales/                 # Traduções em português e inglês
├── public/                  # Imagens e favicon
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar/
│   │   ├── Project/
│   │   └── Sections/
│   ├── routes/              # Rotas do TanStack Router
│   ├── utils/               # Dados e utilitários dos projetos
│   ├── i18n.ts              # Configuração de idiomas
│   └── styles.css           # Tema e estilos globais
├── index.html
└── vite.config.ts
```

## Como executar

### Pré-requisitos

- Node.js instalado.
- Yarn Classic instalado.

### Instalação

```bash
git clone https://github.com/AbynerRocha/portfolio.git
cd portfolio
yarn install
```

### Desenvolvimento

```bash
yarn dev
```

A aplicação será iniciada pelo Vite na porta `3000`.

### Build de produção

```bash
yarn build
```

### Visualizar o build

```bash
yarn preview
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `yarn dev` | Inicia o ambiente de desenvolvimento |
| `yarn build` | Gera o build de produção |
| `yarn preview` | Executa uma prévia do build |
| `yarn lint` | Analisa o código com Biome |
| `yarn format` | Formata o código com Biome |
| `yarn check` | Executa as verificações do Biome |
| `yarn generate-routes` | Atualiza a árvore de rotas |

## Personalização

- Edite os projetos em `src/utils/projects.ts`.
- Altere os textos em `locales/pt-br.json` e `locales/en.json`.
- Ajuste cores e fontes no bloco `@theme` de `src/styles.css`.
- Substitua imagens e favicon dentro de `public/`.

## Contato

- GitHub: [AbynerRocha](https://github.com/AbynerRocha)
- LinkedIn: [Abyner Rocha](https://linkedin.com/in/abynerrocha/)
- E-mail: [abynerr.rocha@gmail.com](mailto:abynerr.rocha@gmail.com)

---

<div align="center">
  Desenvolvido por <a href="https://github.com/AbynerRocha">Abyner Rocha</a>.
</div>
