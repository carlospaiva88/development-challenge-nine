# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o código do backend para o container
COPY . .

# Expõe a porta que o servidor vai utilizar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
