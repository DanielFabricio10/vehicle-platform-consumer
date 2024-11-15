# Etapa de construção
FROM node:16-alpine

WORKDIR /usr/app

# Copiar os arquivos de dependências primeiro
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

RUN chmod +x node_modules/.bin/jest

EXPOSE 5000

CMD ["npm", "start"]
