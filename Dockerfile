# Imagem de Origem
FROM node:14
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY /package.json /app/package.json
COPY /packages/react-ui ./app/packages/react-ui
COPY /packages/shared ./app/packages/shared

RUN yarn install
