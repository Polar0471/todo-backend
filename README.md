# Aplicação ToDo List - Backend

Bem-vindo à aplicação ToDo List! Esta aplicação foi desenvolvida para facilitar a gestão de tarefas, permitindo adicionar, listar, excluir e marcar tarefas como concluídas.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web utilizado para construir a API.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, garantindo maior segurança e clareza no código.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as tarefas.
- **Prisma ORM**: Ferramenta de mapeamento objeto-relacional (ORM) que facilita as operações com o banco de dados.
- **Railway**: Plataforma usada para hospedar o banco de dados PostgreSQL.

## Funcionalidades

- **Adicionar Tarefa**: Crie novas tarefas com título e descrição.
- **Listar Tarefas**: Visualize todas as tarefas existentes.
- **Excluir Tarefa**: Remova tarefas que não são mais necessárias.
- **Marcar Tarefa como Concluída**: Indique quando uma tarefa foi concluída.

## Como Executar a Aplicação

### 1. Clone o repositório
```bash
git clone https://github.com/Polar0471/todo-backend.git
cd todo-backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Atualize ou crie um .env
Você precisa ter no seu .env as variáveis `DATABASE_URL` e `PORT`, de modo que `PORT` tenha como valor 5000 (`PORT=5000`). 

### 4. Configure o banco de dados
Certifique-se de ter uma instância do PostgreSQL configurada e acessível. Utilize o Railway para hospedar seu banco de dados, e atualize o arquivo .env com as credenciais apropriadas para a variável `DATABASE_URL`.

### 5. Execute as migrações do Prisma
```bash
npx prisma migrate dev
```

### 6. Inicie o servidor 
```bash
npm run dev
```

### 7. Testando a API
Com o servidor rodando, você pode utilizar ferramentas como o Postman ou o Insomnia para testar os endpoints da API.