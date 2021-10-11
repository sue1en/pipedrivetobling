# API - Pipedrive to Bling

O Projeto é uma API RESTful, para realizar uma integração entre as plataformas Pipedrive e Bling

## Bibliotecas Utilizadas:
  - express
  - pipedrive
  - jstoxml
  - mongoose
  - dotenv
  - cors
  - axios
  - nodemon (devDependencies)

## Requerimento:
- NodeJS
- MongoDB

## Primeiros Passos:
1. Faça a Instalação do NodeJS correspondente ao seu sistema operacional. [Link de acesso a página](https://nodejs.org/en/).
2. Faça a Instalação do MongoDB correspondente ao seu sistema operacional. [Link de acesso a página](https://docs.mongodb.com/guides/server/install/).
3. Faça a Instalação da sua GUI de preferencia, para facilitar a visualização dos dados. Nesse projeto foi utilizado o Mongo Compass. [Link de acesso a página para download](https://docs.mongodb.com/guides/server/install/).
4. Clone o projeto em uma pasta que deseja armazena-lo.
5. Na pasta raiz do projeto backend, instale as dependências com o comando <b>`npm install`</b> ou <b>`yarn install`</b> para instalar usando o yarn.
7. Crie um arquivo <b>`.env`</b> na pasta raíz do backend com as seguintes informações:
  ```
    # Porta padrão usada no projeto. Exemplo:  
    PORT=3333

    # Pipedrive. Exemplo: 
    PIPEDRIVE_API_KEY=<sua_pipedrive_api_key_aqui>

    #_Bling. Exemplo: 
    BLING_API_KEY=<sua_bling_api_key_aqui>

    #_MongoDB
      ## nome do banco. Exemplo:  
        MONGO_DB_NAME=minha_base_de_dados

      ## Endereço de serviço usado no mongo. Exemplo:
        MONGO_DB_HOST=localhost:27017
  ```
  
8. No package.json, após a instalação das dependências, insiras as seguintes linha para iniciar com o nodemon:
  ```
  "scripts": {
    "dev": "nodemon"
  }
  ```
9. Para rodar o projeto execute o comando <b>`npm run dev`</b> na pasta raiz do projeto de backend.
  
## Rotas
  ```
    /deals (Busca todos os deals existentes).
    /wondeals (Busca todos os deals com status = won).
    /opendeals  (Busca todos os deals com status = open).
    /order' (envia novo pedido para o bling).    
  ```