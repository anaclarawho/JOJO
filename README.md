# JOJO

Plataforma de jogos e ferramentas assistivas da JOJO.

## Padrao tecnico

- app web estatico
- PWA instalavel
- HTML, CSS e JavaScript puros
- hospedagem no GitHub Pages
- sem backend
- sem banco de dados
- sem login
- sem Node obrigatorio para rodar
- sem build complexo
- sem variaveis de ambiente
- sem painel externo
- facil de editar com arquivos estaticos

## Estrutura

- `index.html`: entrada da plataforma
- `assets/`: identidade visual compartilhada
- `styles/`: estilos da home da plataforma
- `scripts/`: dados e comportamento da home
- `jogos/`: jogos e ferramentas integrados
- `docs/`: anotacoes rapidas de publicacao
- `referencias/`: arquivos de referência e fontes originais

## Jogos atuais

- `jogos/palavras/`
- `jogos/textos/`
- `jogos/timer/`
- `jogos/cabo-de-guerra/`

## Fluxo de trabalho

1. Ajustar localmente os arquivos do jogo ou da plataforma.
2. Testar a versão antes de publicar.
3. Atualizar este repositório.
4. Publicar no GitHub Pages.

## Publicação

A JOJO foi pensada para publicar como site estatico no GitHub Pages, sem backend e sem build.

- `manifest.webmanifest` na raiz
- `service-worker.js` na raiz
- cache versionado no service worker
- funciona como site e como app instalavel pelo navegador

Mais detalhes em `docs/deploy-github-pages.md`.
