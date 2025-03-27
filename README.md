# Toughts (Pensamentos)

Estou muito orgulhoso deste projeto! O "Toughts" nasceu da minha vontade genuína de aprender sobre autenticação e aprofundar meu conhecimento no desenvolvimento backend. Sempre senti a necessidade de organizar meus pensamentos e anotações de maneira estruturada, e foi assim que surgiu essa aplicação. 

Com o "Toughts", qualquer usuário pode criar uma conta, fazer login e gerenciar seus pensamentos de forma intuitiva. A segurança sempre foi uma prioridade, por isso implementei criptografia de senhas e uma série de camadas de autenticação para garantir uma experiência segura. Além disso, busquei aplicar boas práticas de desenvolvimento e organização no backend, utilizando o padrão MVC.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **Sequelize** - ORM para interação com o banco de dados MySQL
- **MySQL** - Banco de dados relacional
- **Handlebars** - Template engine para renderização no frontend
- **HTML, CSS** - Estrutura e estilização da interface
- **bcryptjs** - Criptografia de senhas
- **connect-flash** - Mensagens flash para feedback ao usuário
- **cookie-parser, cookie-session** - Gerenciamento de cookies
- **express-flash, express-session** - Gerenciamento de sessões
- **mysql2** - Driver MySQL para Node.js
- **nodemon** - Reinicialização automática durante o desenvolvimento
- **session-file-store** - Armazenamento de sessões em arquivos

O principal foco deste projeto foi a **lógica de programação** e o **desenvolvimento backend**.

---

## 📌 Funcionalidades

- 📌 **CRUD de Pensamentos** (Criar, Ler, Atualizar e Deletar)
- 🔑 **Autenticação de Usuário** (Cadastro, Login, Logout, Recuperação de Conta, Troca de Senha)
- 🔍 **Busca por Pensamentos**
- 📆 **Ordenação por Mais Novos ou Mais Antigos**
- 📝 **Dashboard Pessoal** (Cada usuário pode visualizar e gerenciar seus próprios pensamentos)
- 🔒 **Validação Segura de Senhas no Backend**
- 🌎 **Página Pública para Explorar Pensamentos de Outros Usuários**
- ⚡ **Feedback ao Usuário com Mensagens Flash**

---

## 🏗 Arquitetura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)**, garantindo uma separação clara entre a lógica de negócios, a interface do usuário e a manipulação dos dados.

### 📁 Estrutura de Pastas
```
pensamentos-node/
│── controllers/        # Lógica dos controladores
│── db/                 # Configuração e conexão do banco de dados
│── helpers/            # Funções auxiliares
│── models/             # Definição dos modelos do banco de dados
│── public/             # Arquivos estáticos (CSS, JS, imagens)
│── routes/             # Definição das rotas
│── sessions/           # Armazenamento de sessões
│── views/              # Templates Handlebars
│── index.js            # Configuração principal do servidor
│── package.json        # Dependências do projeto
```

---

## 🔧 Como Rodar o Projeto

### 1️⃣ Pré-requisitos
Certifique-se de ter instalado:
- Node.js
- MySQL

### 2️⃣ Clonar o repositório
```sh
$ git clone https://github.com/seu-usuario/pensamentos-node.git
$ cd pensamentos-node
```

### 3️⃣ Instalar as dependências
```sh
$ npm install
```

### 4️⃣ Configurar o banco de dados
Crie um banco de dados MySQL e edite o arquivo de configuração dentro da pasta `db/`

### 5️⃣ Rodar as migrações do Sequelize
```sh
$ npx sequelize-cli db:migrate
```

### 6️⃣ Iniciar o servidor
```sh
$ npm start
```
Acesse em: `http://localhost:3000`

---

## 🛡 Segurança e Autenticação

A autenticação foi implementada utilizando **bcryptjs** para criptografia de senhas e **express-session** para gerenciamento de sessões. 

Cada usuário pode:
- Criar conta com **nome, e-mail e senha**
- Recuperar conta caso esqueça a senha
- Atualizar sua senha de maneira segura

---

## 📜 Considerações Finais

Este projeto foi uma grande oportunidade para aprimorar minhas habilidades em desenvolvimento backend e aplicar conceitos de autenticação segura. Espero que ele possa ajudar outras pessoas a organizar seus pensamentos, assim como me ajudou! 🚀

Fique à vontade para contribuir e sugerir melhorias.

**Lucas Mayrink**

