# Deploy no Cloudflare Pages

## Estrutura esperada

O Pages deve receber a pasta do repositório com estes itens na raiz:

- `index.html`
- `assets/`
- `jogos/`
- `scripts/`
- `styles/`

## Atualização manual

1. Abrir o projeto `jojo` no Cloudflare Pages.
2. Ir em `Deployments`.
3. Clicar em `Create deployment`.
4. Enviar a pasta do repositório atualizada.

## Domínio

- domínio publicado: `jojo.profanaclara.com.br`
- tipo de registro DNS: `CNAME`
- host: `jojo`
- target atual do Pages: conferir no painel da Cloudflare antes de trocar

## Observação

Os links da plataforma usam caminhos relativos para funcionar corretamente quando o site estiver publicado na raiz.
