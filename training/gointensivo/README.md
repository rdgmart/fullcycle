# GO Intensivo - Evento da FullCycle ocorrido no dias 06, 07, 08 de março 2023
## Professor Wesley Willian - https://github.com/devfullcycle/gointensivo2

# COMANDOS UTEIS

```bash
    # cria o arquivo go.mod que contem as configuracoes do pacote e dependencias (similar ao npm init)
    $ go mod init nome_do_pacote

    # similar npm install
    $ go mod tidy 

    $ go clean -cache

    $ go run nome_do_programa.go

    # constroi para linux o executavel do programa
    $ GOOS=linux go build nome_do_programa.go
```
# Abaixo as configurações para o programa zapgpt que integra o What's com o ChatGPT

# Servless
- https://www.serverless.com/
```bash
    $ npm install -g serverless
    $ serverless create --template aws-go-mod
```
## Configure AWS Credentials 
- http://slss.io/aws-creds-setup
- https://www.serverless.com/framework/docs/providers/aws/guide/credentials/
- https://www.youtube.com/watch?v=KngM5bfpttA
```bash
    $ serverless config credentials --provider aws --key AWS_KEY --secret AWS_SECRET
```

### Gere a chave API no OpenAI e configure antes de fazer os passos abaixo
```bash
    $ make build
    $ serveless deploy
```

# TWILLIO (Crie uma conta caso não tenha)
- Ao acessar essa conta -> Messaging -> Try it out -> Send a WhatsApp message
-  Acesse com o QRCode ou envia uma mensagem para o numero exibido com o codigo da tela
-  Pegue o endpoint gerado pelo deploy do serverless e configure na aba Sandbox settings