# Deploy no GitHub Pages

## Modelo usado pela JOJO

- site estatico
- sem backend
- sem banco de dados
- sem build
- sem Node para rodar
- publicado direto do repositório

## Estrutura esperada na raiz

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `offline.html`
- `assets/`
- `jogos/`
- `scripts/`
- `styles/`

## Como publicar

1. Fazer as alteracoes no repositório.
2. Confirmar que os arquivos continuam estaticos.
3. Enviar para a branch `main`.
4. No GitHub, ativar `Pages` publicando a branch `main` pela raiz do projeto.

## Observacoes

- O projeto usa caminhos relativos para funcionar tanto em dominio proprio quanto em GitHub Pages.
- Quando houver mudanca de arquivos estaticos importantes, atualizar a versao do cache em `service-worker.js`.
- Para o iPhone, a instalacao continua sendo pela opcao `Adicionar a Tela de Inicio`.
