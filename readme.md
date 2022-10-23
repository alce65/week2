# Learning JS

## Configuración del proyecto

-   .editorconfig
-   package.json (configura prettier)
-   readme.md
-   .gitignore

### Configuración / instalación de ESLINT

-   "eslint:recommended"
-   "prettier"

## Creación de módulos

Módulos ESM usados en node y en browser. Configuración necesaria (package.json)

-   utils.js
-   index.js
-   index.html

## Modelos mentales

Ejemplos de código en la carpeta mental.models

## Testing

Instalación / configuración de jest

-   npm i -D jest
-   update de package.json: ESM en jest
-   update de eslint: env: {jest: true}

Ejemplos de código en la carpeta testing

## Game of live

-   Pruebas de concepto hechas en clase: carpeta gol
-   Versión completa del ejercicio: carpeta game.of.live

## Actualizaciones

### GitHub Actions

-   Incorporación de .github/workflows/audit.yml
-   Update .editorconfig: [*.yml] indent_size = 2
-   Comprobación del eclint: npx eclint check
