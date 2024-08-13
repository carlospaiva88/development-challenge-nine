# **Sistema de Gerenciamento de Pacientes**

Um sistema completo para gerenciar registros de pacientes, incluindo funcionalidades de cadastro, edição, remoção e visualização dos dados em tempo real. Este projeto é uma aplicação full-stack com um front-end React e um back-end Node.js com Express, conectados a um banco de dados PostgreSQL. A aplicação também está containerizada usando Docker.

## **Funcionalidades**

### **Front-End**

- **Formulário de Registro de Pacientes**:
  - Permite a inserção de novos pacientes com informações como nome, data de nascimento, email e endereço.
  - Exibe mensagens de sucesso ao salvar um paciente e mensagens de erro em caso de falha.
  - Atualiza a lista de pacientes em tempo real sem necessidade de recarregar a página.

- **Lista de Pacientes**:
  - Exibe a lista de pacientes em uma tabela paginada.
  - Opções para editar e remover pacientes.
  - Modal de edição para atualizar informações dos pacientes.
  - Exibe mensagens de sucesso ao editar ou remover um paciente.
  - Paginador para navegar entre as páginas da lista de pacientes.

- **Navbar**:
  - Componente de navegação com links para as páginas de registro e consulta de dados dos pacientes.
  - Inclui a marca da empresa, campo de busca, e links para contato e sobre nós.

### **Back-End**

- **API RESTful**:
  - Endpoints para operações CRUD (Create, Read, Update, Delete) sobre pacientes.
  - Endpoints:
    - `POST /api/pacientes` - Adiciona um novo paciente.
    - `GET /api/pacientes` - Recupera todos os pacientes.
    - `PUT /api/pacientes/:id` - Atualiza um paciente existente.
    - `DELETE /api/pacientes/:id` - Remove um paciente.

- **Banco de Dados**:
  - Utiliza PostgreSQL para armazenar os dados dos pacientes.
  - Modelagem de banco de dados para armazenar informações como nome, data de nascimento, email e endereço dos pacientes.

## **Tecnologias Usadas**

### **Front-End**:
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Material-UI (MUI)**: Biblioteca de componentes React para criar interfaces de usuário com estilos prontos e responsivos.

### **Back-End**:
- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework para construir APIs RESTful com Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

### **Containerização**:
- **Docker**: Utilizado para containerizar o projeto, garantindo consistência em ambientes de desenvolvimento e produção.

## **Instalação e Configuração**

### **Docker**

1. Certifique-se de que o Docker está instalado em seu sistema.
2. Clone o repositório:
   ```bash
   git clone https://github.com/carlospaiva88/development-challenge-nine.git
   cd development-challenge-nine

3. Construa e inicie os containers Docker:
```bash
docker-compose up --build
```
- Isso criará e iniciará os containers para o front-end, back-end e banco de dados PostgreSQL conforme definido no arquivo docker-compose.yml

4. Configure o banco de dados PostgreSQL com as credenciais apropriadas de configuração (db.js).

## **Sem Docker**

### Front-End
1. Navegue até o diretório do front-end:
```bash
cd frontend.
```
2. Instale as dependências:
```bash
npm install.
```
3.Inicie o servidor de desenvolvimento:
```bash
npm start.
```
### Back-End
1. Navegue até o diretório do back-end:
```bash
cd backend
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor:
```bash
node server.js
```
