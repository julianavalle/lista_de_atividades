#!/bin/sh

# Esperar pelo PostgreSQL estar disponível
dockerize -wait tcp://postgres:5432 -timeout 20s

# Rodar as migrações
npx sequelize-cli db:migrate

# Iniciar a aplicação
node index.js
