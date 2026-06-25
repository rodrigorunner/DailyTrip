# 🌍 DailyTrips

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Node](https://img.shields.io/badge/node.js-18%2B-green)
![Express](https://img.shields.io/badge/express-api-lightgrey)
![Database](https://img.shields.io/badge/database-postgresql-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Visão Geral

O **DailyTrips** é uma aplicação web de diário online criada para registrar **experiências pessoais e viagens de forma organizada e contínua**.

O projeto simula um sistema real onde o usuário pode armazenar momentos importantes do seu dia a dia, criando um histórico estruturado de suas vivências.

Mais do que um simples bloco de notas, o DailyTrips tem como foco representar uma **linha do tempo de experiências**, permitindo consultas e organização por usuário e data.

---

## 🎯 Propósito do Projeto

Este projeto foi desenvolvido com dois objetivos principais:

### 🧠 1. Aprendizado técnico
- Praticar desenvolvimento backend com Node.js
- Trabalhar com API REST
- Implementar arquitetura em camadas (MVC + Service + Repository)
- Integrar com banco de dados relacional (PostgreSQL)

### 🌍 2. Simulação de um sistema real
- Criar uma aplicação com estrutura próxima de produção
- Simular um produto digital de diário/experiências
- Entender como escalar organização de código

---

## ⚙️ Tecnologias Utilizadas

- Node.js  
- Express  
- JavaScript (ES6+)  
- PostgreSQL  
- pg (node-postgres)

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura em camadas para melhor organização e escalabilidade:

```bash
src/
│
├── routes/        # Definição das rotas da API
├── controllers/   # Camada de entrada (requisições e respostas)
├── services/      # Regras de negócio
├── repositories/  # Acesso ao banco de dados
└── database/      # Configuração da conexão PostgreSQL
