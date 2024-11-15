# Plataforma de Venda de Veículos Consumer

Este projeto é uma plataforma para revenda de veículos automotores, implementada como parte do desafio de desenvolvimento de microsserviços, onde este serviço consome as apis.

## Requisitos

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
1. [Docker](https://www.docker.com/get-started) (para criar e orquestrar os containers)
2. [Docker Compose](https://docs.docker.com/compose/install/) (para facilitar a gestão de múltiplos containers)
3. [Node.js](https://nodejs.org/en/download/) (para rodar o código do serviço principal e do serviço de venda de veículos)
4. [npm](https://www.npmjs.com/get-npm) (gerenciador de pacotes do Node.js)

Após verificado/instaldo todas as tecnologias listadas acima, podemos seguir para o clone do projeto onde estão as apis:
```bash
git clone https://github.com/DanielFabricio10/vehicle-platform.git
```
Agora no terminal de comando, acesse a pasta do projeto e execute:
1. para subir os containers e buildar a aplicação:
```bash
docker-compose up -d --build
```
2. para executar os testes e validar se todas as funcionalidades da aplicação estão operaveis
```bash
docker-compose run app npm test
```

Após o primeiro projeto estar rodando, podemos dar inicio ao este projeto que será o principal:
```bash
git clone https://github.com/DanielFabricio10/vehicle-platform-consumer.git
```
Agora no terminal de comando, acesse a pasta do projeto e execute:
1. para subir os containers e buildar a aplicação:
```bash
docker-compose up -d --build
```

2. Execute o comando abaixo nos dois projetos para criar uma network
```bash
docker network create --driver bridge vehicle-service
```

3. para executar os testes e validar se todas as funcionalidades da aplicação estão operaveis
```bash
docker-compose run app npm test
```

**Pronto o projeto está operavel para validação/atualizações, as apis podem ser acessadas pela collection que está na raiz do projeto**
