![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React IronPlate

Esse boilerplate já inclui:

- Pré-configuração do Axios para injeção de cabeçalhos de autenticação e BaseURL
- Context para armazenar state de usuário logado
- Forms de Login e Signup
- Roteamento básico
- Componente de rota protegida

## Para Começar

- Faça o fork e clone deste repositório

## Instalação

```shell
$ npm install
```

## Deploy no Netlify

1. Faça login no Netlify e selecione seu repositório
2. Em 'Deploy settings > build command' escreva: CI=false npm run build
3. Em 'publish directory' escreva: build/
4. No arquivo `apis/api.js`, preencha a URL do seu servidor Express deployado no objeto `apis`, chave `production`
5. Adicione a URL do seu app hospedado no Netlify nas variáveis de ambiente do backend no Heroku

Happy coding! 💙
