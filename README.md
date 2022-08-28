# symfony_react_projet

front-end react + back-end symfony 5.4.12

Symfony gère le bacckend en retourant les données au format JSON

Install react
composer require symfony/webpack-encore-bundle

yarn install 
La commande ci-dessus crée un fichier webpack.config.js, un dossier assets et ajoute un dossier node_modules au fichier .gitignore.

$ yarn add @babel/preset-react --dev
$ yarn add react-router-dom
$ yarn add --dev react react-dom prop-types axios
$ yarn add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime

Ensuite, nous allons configurer Webpack Encore en activant React et en configurant également un point d'entrée dans le fichier webpack.config.js à la racine de notre projet