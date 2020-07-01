#JS Well Dev Playground - Marvel API

(Readme está em PT-BR, código em inglês)

# Pre-requisitos

- REACT_APP_API_PUBLIC_KEY - Generate [here](https://developer.marvel.com)
- REACT_APP_API_PUBLIC_KEY - Optional Sentry [here](http://sentry.io/)
- nodejs >= 14
- yarn > 1.12
- Docker (Optional)

# Online avaliable here

https://well-dev-playground-react-ui.web.app/home

# Descrição

Este projeto contém uma implementação da API da Marvel de quadrinhos, em que podemos listar o total de quadrinhos, e filtrar a busca já realizada por personagem, nome do quadrinho e autor, também é possível realizar uma busca de heróis. Sistema foi construido mobile first

Este projeto foi criadoo utilizando yarn packages, este possui testes, eslint, babel e storybook disponíveis para todos os projetos, da forma que está separado em dois pacotes principais:

## Packages

| Package                      | folder   | Feature                                     |
| ---------------------------- | -------- | ------------------------------------------- |
| @oliveiras-well/es-shared    | shared   | Javascript util functions                   |
| well-dev-playground-react-ui | react-ui | A Mavel comic list display build with react |

### well-dev-playground-react-ui

Um projeto react, utilizando quase que estritamente hooks

- envs - Exemplo de arquivo env
- src
  - assets - Images e etc
  - components - Componentes reutilizaveis
  - constants - Constantes
  - context - Contextos globais como alerta
  - hooks - Hoooks
  - pages - Componetes das paginas presentas nas rotas, e também o template com barra e menu (App)
  - routes - rotas
  - services - serviços de api
  - utils - etc
  - .env - Arquivo necessário com as properties, pode

- Sobre a arquitetura, sistema usa material ui como framework de componentes
- Componentes funcionais em sua grande maioria, somente error boundary como class
- eslint, pritter e pre commit hooks
- React router com separação das rotas via lazy
- material-ui Styles utilizando make styles, porém degrada o desempenho, logo migrando para styled components ou styles inline como constantes.
- Classes services separadas


#### Rodando

Para todos os comandos é necessárioo primeiro que xecute `yarn` na raiz do projeto para instalar as dependencias

#### Rodandooo interface

1. Execute `yarn web:start` para subir na porta 3000

#### Rodando Storyboook

1. Execute `yarn storybook:start"` para subir na porta 5555

#### Rodando Documentationjs

1. Execute `yarn docs:serve` para subir na porta 4001

#### Rodando testes

Foram criados testes utilizando jest

1. Execute `yarn jest`

#### Rodando Docker (beta)

A interface react pode ser utilizada com docker, utilizando o comando `docker-compose up -d`

##### CI e Deploy

Utilizamos o firebase para hosting do front-end, e travis para CI, pipeline está definido como

1. eslint:fix
2. test
3. build
4. Deploy

#### @oliveiras-well/es-shared

Funções que podem ser reutilizadas em outros pacotes, para mais informações verifique o documentationjs

# Dúvidas

Qualquer dúvida contactar well.oliveira.snt@gmail.com
