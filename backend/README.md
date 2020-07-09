# Backend do Projeto Angular com Portinari

   #### Preparação do Ambiente
   - [Node.js](https://nodejs.org/en/download/)
   - [MongoDB](https://www.google.com/url?q=https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.0-signed.msi&sa=D&source=hangouts&ust=1580842165889000&usg=AFQjCNHlJhXO7TIhW4AOLbu3wyGS_zExfQ)
   - [Robo 3T](https://robomongo.org/download)
   - [Postman](https://dl.pstmn.io/download/latest/win64) | [Insomnia](https://insomnia.rest/download/)
   
   ## Criar uma pasta
      mkdir Nome_da_Pasta
      
   ## Criar um package.json
      npm init - y
      
   ## Instalar o Express

   - [Express](https://www.npmjs.com/package/express)
   - [Express Generator](https://www.npmjs.com/package/express-generator)
   
   ## Criar um projeto como o Express
   
     express --no-view Nome_Projeto
      
   O express irá nos criar a estrutura da pasta.
   
   ### Na pasta do Projeto
    
   Instalar as dependências
   
    npm install -g nodemon
    
   O nodemon ele renicia automaticamente o `node`, quando há uma alteração sem precisar dar `npm start` novamente.
   
   No arquivo do `package.json`, é necessário fazer uma mudança para que o `nodemon` possar iniciar.
   
   Dentro do Obejto, a propriedade `scripts` deve ter a seguinte configuaração:
   
   ```
  "scripts": {
    "start": "nodemon ./bin/www"
  }
   ```
   
   Assim o `nodemon` pode inicializar a nossa aplicação.
   
   As outras dependências:
   
    npm install --save mongoose

    npm install --save cookie-parser debug express morgan
  
  Agora dar um `npm install` para terminar de instalar todas as depedências.

  Para rodar a aplicação `npm start`.
  
  A aplicação roda no [localhost](http://localhost:3000/) Porta 3000

  **No Robo 3T é necessária criar um databese e sendo necessário que ele tenha o mesmo nome na conexão do mongoose!**
  [Mongoose - Connections](https://mongoosejs.com/docs/connections.html).
  
  ### Observação: 
  
  **Ao declarar o modulo na rota é necessário que se tenha o** `require`, **a variável ficando assim:**
  
  `const nomeModule = require('../Caminho para o module')`
  
  **Pode existir confintos de** `cors` **em uma coneção com dois localHost. Para se resolver o problema é necessário instalar o**       `cors` **em sua aplicação.**
  
  -  [Cors](https://www.npmjs.com/package/cors)
  
