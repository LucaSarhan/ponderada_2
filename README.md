# Ponderada 2

## Arquitetura de Pastas

```
├── TO-DO-LIST-APP
    ├── public
    │    ├──login.html
    │    ├──login.css
    │    ├──login.js
    │    ├──main.html
    │    ├──style.css
    │    ├──script.js
    ├── supabase.js
```

## Arquitetura da Solução

![image](https://github.com/LucaSarhan/ponderada_2/assets/99192966/339ad75e-d9f5-494a-9a84-ec39b9bd13f9)

## Explicação

A pasta public minha contem minha aplicação por completo, ou seja, todas as funcionalidades da aplicação estão la. A autenticação do usuario decidir fazer usando JWT está no arquivo 'supabase.js'. 

Eu decidir usar o JWT porque é uma opção segura e confiável de autentcação que se enquadrou bem na minha solução. No arquivo 'supabase.js', implementei uma solução robusta de autenticação usando JSON Web Tokens (JWT), uma abordagem confiável e segura amplamente adotada para proteger o acesso às minhas rotas e recursos sensíveis. O JWT é uma estrutura que permite a criação de tokens de autenticação assinados digitalmente, contendo informações do usuário. Ele se encaixou perfeitamente na minha solução, permitindo-me validar e autorizar o acesso de usuários de forma eficaz. 

Vou explicar como isso funciona: 

Geração do Token:
Quando um usuário efetua login, coletamos as credenciais e as verificamos em nosso backend. Se as credenciais estiverem corretas, geramos um JWT usando uma chave secreta única. Este token é então assinado digitalmente, incorporando informações como o ID do usuário e seu nome de usuário.

Envio do Token:
O token gerado é enviado de volta para o cliente (navegador) como resposta à solicitação de login. Normalmente, é armazenado no local de armazenamento do cliente, como localStorage ou sessionStorage.

Acesso a Rotas Protegidas:
Ao tentar acessar rotas protegidas, o cliente deve incluir o token JWT nas solicitações, geralmente nos cabeçalhos HTTP. No meu caso, o backend (Express, por exemplo) extrai o token do cabeçalho e verifica a assinatura usando a mesma chave secreta. Se a assinatura for válida, o usuário é autenticado e autorizado a acessar a rota protegida.

Renovação do Token:
Os tokens JWT geralmente têm um tempo de expiração definido. Quando o token estiver prestes a expirar, o cliente pode solicitar um novo token por meio de um processo de renovação. Isso garante que os usuários autenticados permaneçam conectados sem a necessidade de efetuar login repetidamente.
Dessa forma posso garantir que apenas usuários autenticados e autorizados tenham acesso a minha aplicação.

Agora explicando como minha aplicação funciona:
O arquivo 'supabase.js' além de ser responsável pela autenticação do usuario faz a aplicação como um todo rodar atráve de node.
