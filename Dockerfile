# Étape 1 : Utiliser une image Node.js comme base
FROM node:20

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tout le projet dans le conteneur
COPY . .

# Étape 6 : Exposer le port 3000
EXPOSE 3000

# Étape 7 : Démarrer l'application
CMD ["npm", "run", "start"]
