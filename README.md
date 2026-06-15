# 🎌 GeekRent - Sistema de Gestão de Locadora Geek/Otaku

## 📖 Descrição

GeekRent é um sistema de gerenciamento de locação de itens geek e otaku desenvolvido utilizando uma arquitetura baseada em microsserviços.

O sistema permite que usuários realizem o aluguel de itens como:

- Mangás
- Figures
- Cosplays
- Consoles
- Colecionáveis

---

# 🚀 Tecnologias Utilizadas

## Backend

- Node.js
- Express.js

## Frontend

- React
- Vite

## Banco de Dados

- MySQL

## Infraestrutura

- Docker
- Docker Compose

## Testes

- Jest
- Supertest
- Cucumber

---

# 🏗️ Arquitetura

O projeto foi dividido em 3 microsserviços:

## Auth Service

Responsável por:

- Cadastro
- Login
- JWT
- Controle de permissões

Porta: 3001

---

## Item Service

Responsável por:

- CRUD de itens
- Pesquisa
- Disponibilidade

Porta: 3002

---

## Rental Service

Responsável por:

- Solicitação de locação
- Aprovação
- Devolução
- Multas

Porta: 3003

---

# 🎨 Frontend

Páginas:

- Home
- Dashboard
- Login
- Cadastro
- Itens
- Perfil
- Locações
- Minhas Locações

---

# 🐳 Executando com Docker

```bash
docker compose up --build
```

Frontend:

http://localhost:5173

Auth:

http://localhost:3001

Items:

http://localhost:3002

Rentals:

http://localhost:3003