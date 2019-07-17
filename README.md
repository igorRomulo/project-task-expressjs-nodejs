# bootcamp-gostack-desafio-express-node
Aplicação backend para gerenciar projetos e tarefas usando API REST
> Esta aplicação foi construida como desafio para o GoStack Bootcamp da [Rocketseat](rocketseat.com.br)
## Listando seus projetos
```GET: localhost:3000/projects```
## Criando projeto
```POST: localhost:3000/projects body:``` ```{ "id": "0", "title": "Projeto garotão"}```
## Renomeando um projeto
```PUT: localhost:3000/projects/:id``` ```{ "title": "Projeto garotão das galaxias"}```
## Deletando um projeto
```PUT: localhost:3000/projects/:id```
## Adicionando uma tarefa ao projeto
```PUT: localhost:3000/projects/:id/task``` ```{ "title": "Tarefinha vai filhão"}```
# Configuração do ambiente
**Uso de desenvolvimento**
 > yarn yarn dev
 
**Para uso** 
> yarn node index.js
