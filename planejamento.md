planejamento:

BACK-END

Entities:
    Client
        -id,
        -nome,
        -email,
        -telefone,
        -endereco,
        -cpf
    User
        -

auth.controller
rota: /login
Página inicial, deverá verificar se o remember me foi marcado no último login para não exibir mais.

client.controller
rota (GET): /clients
Rota que listará todos os clientes cadastrados no banco com paginação.

rota (GET): /client/:id
Rota que busca um cliente pelo id.

rota (POST): /client/create
Rota que recebe os dados do novo cliente a ser inserido

rota (PUT): /client/update
Rota que recebe os dados de um cliente para ser alterado

rota (DELETE): /client/delete
Rota que recebe o id do cliente e deleta

FRONT-END

rota: /
Página inicial logado onde fará uma listagem de usuários a partir da api (https://randomuser.me/) com
paginação e um campo de busca por nome, email ou username.

rota: /cat-http
Página onde haverá um campo de busca podendo inserir um número e ao clicar no botão
será exibido a imagem correspondente da api (https://http.cat/) e caso não seja encontrado,
exibir uma imagem de 404.

rota: /random-dog
Página onde pegará aleatoriamente uma imagem da api (https://random.dog/) e exibirá

rota: /clients
Página onde listará todos os clientes

rota: /client/create
Página para o formulário de criação do cliente

rota: /client/update
Página para o formulário de atualização do cliente
