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

A pasta public minha contem minha aplicação por completo, ou seja, todas as funcionalidades da aplicação estão la. 

A autenticação do usuario decidir fazer usando JWT está no arquivo 'supabase.js'. 

Eu decidir usar o JWT porque é uma opção segura e confiável de autenticação que se enquadrou bem na minha solução. No arquivo 'supabase.js', implementei uma solução robusta de autenticação usando JSON Web Tokens (JWT), uma abordagem confiável e segura amplamente adotada para proteger o acesso às minhas rotas e recursos sensíveis. O JWT é uma estrutura que permite a criação de tokens de autenticação assinados digitalmente, contendo informações do usuário. Ele se encaixou perfeitamente na minha solução, permitindo-me validar e autorizar o acesso de usuários de forma eficaz. 

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

Código do lado do servidor:

O servidor é configurado usando a estrutura Express.js. Ele escuta na porta 3000 as solicitações recebidas. Arquivos estáticos como arquivos HTML, CSS e JavaScript são servidos no diretório “public”. O servidor mantém uma matriz predefinida de usuários com nomes de usuário e senhas codificados. Quando um usuário acessa a rota /login e envia suas credenciais, o servidor verifica o nome de usuário e a senha fornecidos. Se as credenciais corresponderem a qualquer usuário na matriz, um JWT será gerado usando a função generateToken. Este token é enviado de volta ao cliente, indicando autenticação bem-sucedida.

Login do lado do cliente:

A página de login (login.html) apresenta aos usuários um formulário para inserir seu nome de usuário e senha. Quando o formulário é enviado, uma solicitação POST é enviada para a rota /login do servidor. O servidor verifica as credenciais enviadas em relação à matriz de usuários predefinida. Se as credenciais forem válidas, o servidor responde com um JWT, que é então armazenado como cookie no navegador do cliente. Este JWT serve como prova da sessão autenticada do usuário. Após o login bem-sucedido, o cliente é redirecionado para a rota protected/main.

Gerenciamento de tarefas do lado do cliente:

A página principal (index.html) apresenta o aplicativo To-Do List. Os usuários podem inserir tarefas no campo de texto fornecido e adicioná-las à lista de "To-Do" clicando no botão "Add Task". Os dados da tarefa são obtidos de um banco de dados Supabase usando a função fetchData, que atualiza a UI para exibir tarefas nas listas "To-Do" e "Done" com base em seu status de conclusão. As tarefas na lista "To-Do" possuem caixas de seleção ao lado delas.

O botão "Move to done" permite aos usuários marcar as tarefas selecionadas como concluídas. Ao serem clicadas, as tarefas associadas são atualizadas no banco de dados através da função updateData, alterando seu status para concluída. O botão "Delete" na lista "Concluído" permite que os usuários excluam tarefas concluídas selecionadas, aproveitando a função deleteData.

Além disso, o botão “Toggle dark mode” altera o tema visual do aplicativo entre os modos claro e escuro, fornecendo uma opção de personalização fácil de usar.

Integração Supabase:

Supabase, um serviço de banco de dados em nuvem, é usado para gerenciar os dados de tarefas do aplicativo. O aplicativo se conecta ao Supabase usando uma URL e uma chave de API fornecidas. A função fetchData consulta o banco de dados Supabase para recuperar dados de tarefas, que são então usados ​​para preencher as listas "To-Do" e "Done" na UI. A função updateData atualiza o status de conclusão da tarefa no banco de dados, enquanto a função deleteData remove tarefas concluídas.

Em essência, este aplicativo demonstra um ciclo completo: os usuários podem fazer login com segurança, gerenciar tarefas usando interações do lado do cliente e ter seus dados armazenados e recuperados de um banco de dados em nuvem via Supabase. Ele mostra a integração de várias tecnologias para criar uma aplicação web funcional e interativa.
