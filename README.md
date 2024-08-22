# Tauri SQL Viewer/Editor

Une application de bureau construite avec Tauri pour visualiser et modifier des données SQL.

## Fonctionnalités

- Connexion à des bases de données SQL
- Visualisation des tables et des données
- Modification des données directement dans l'interface
- Exécution de requêtes SQL personnalisées

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Rust](https://www.rust-lang.org/) (édition 2021 ou supérieure)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

## Installation

1. Clonez ce dépôt :
   ```
   git clone https://github.com/Doxteur/TeeTable/
   cd TeeTable
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

3. Lancez l'application en mode développement :
   ```
   npm run tauri dev
   ```

## Construction

Pour construire l'application pour la production :

```
npm run tauri build
```

## Utilisation

1. Lancez l'application
2. Connectez-vous à votre base de données en fournissant les informations de connexion nécessaires
3. Naviguez dans les tables et visualisez les données
4. Double-cliquez sur une cellule pour modifier son contenu
5. Utilisez l'éditeur SQL pour exécuter des requêtes personnalisées

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter le fichier CONTRIBUTING.md pour plus de détails.

## Licence

Ce projet est sous licence [MIT](LICENSE).
