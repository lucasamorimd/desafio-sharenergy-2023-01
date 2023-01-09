## APRESENTAÇÃO DO PROJETO:

<a href="https://www.youtube.com/watch?v=LOTTulxs_Bs"> Clique aqui para ver </a>

## OBSERVAÇÕES:

- Para ambiente local é necessário ter o mongo instalado e configurado. Caso esteja configurado em uma porta diferente da padrão (27017) ajustar nas variaveis de ambiente do backend.
- Caso dê conflitos com portas exportadas no docker, alterar a porta exportada no docker-compose.yml.
- Rodar todo o ambiente em docker ou os dois ambientes separados. Não foi configurado para rodar um ambiente em docker e o outro local, não irá funcionar como o esperado.

## CONFIGURAÇÕES

### FRONTEND E BACKEND: DOCKER

- dentro do diretório /

* <code>docker-compose up --build</code>

# OU:

### BACKEND: LOCAL

- dentro do diretório /backend

* Renomear .env.example para .env
* <code> npm install </code>
* <code>npm install -g migrate-mongoose</code>
* <code>npm run migrate</code>
* <code>npm run start:watch</code>

- rota inicial padrão local: http://localhost:5000
- rota inicial padrão docker: http://localhost:5003

### FRONTEND: LOCAL

- dentro do diretório /frontend

* Renomear .env.example para .env
* <code>npm install</code>
* <code>npm run dev</code>

- rota inicial padrão: http://localhost:5173
