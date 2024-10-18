
# ESPACIO PARA LOS COMENTARIOS DE LA GENTE XD

/*Gente si añaden algo o cambian algo aparte de avisar por el grupo escriban aquí con fecha para saber qué cosa y cuándo se alteró algo en caso de tener un bug saber dónde buscar y tener todo organizado xd*/

### Ya ahora si pongan sus avance Y NO SE OLVIDEN DE HACER PULL Y AVISAR ANTES DE HACER PUSH PARA QUE NO SE LOQUEE TODO EL PROYECTO EN NUESTRAS PCS XDDDDD

17/10 - Creación del proyecto y subida a GitHub
    Ya se instaló la librería de react-router-dom pero al estar en node_modules no se subirá al git, no se olviden de instalarla junto con el npm install.
    Hagan branch para mantener el código a prueba de errores :like: trabajen en su respectiva rama ps NADIE TOCA EL MAIN HASTA QUE LOS 4 ESTEMOS DE ACUERDO xd
    




## COMANDOS GIT PARA QUE USEN: (están en orden para subirlos al repo xd)

### Esto solo se hace la primera vez que vas a hacer cambios

`git config --global user.name "nombre_de_usuario"`
`git config --global user.email "correo@correo.com"`
/*No se olviden de establecer sus usuarios en git para evitar problemas de sincronizacion, pongan su info entre comillas*/

`git clone https://github.com/Kabo003/ProyectoPrograWEB.git`
/*se descargará el repositorio que ya está en github ojo dónde ejecutan el comando xd osea ejecuten el comando después de hacer cd y ubicarse en la carpeta donde quieres descargar el repositorio*/

`cd nombre-del-repositorio`
/*se ubican en la carpeta del repositorio y empiezan a hacer sus cambios*/

### Esto se hace siempre xd

`git pull origin main`
/*actualiza la rama principal para tener lso cambios y la version más reciente del proyecto HAGAN ESTO ANTES DE REALIZAR CAMBIOS no se olviden esta parte es prob la más importante xddd*/

`git branch`
/*para que vean en que rama están*/

`git branch nombre_de_tu_rama`
/*para que creen una nueva rama*/

`git checkout nombre_de_tu_branch`
/*para ubicarse en el branch (o rama) donde realizaras cambios*/

`git status`
/*Para que vean los cambios locales que se realizaron o los cambios que faltan subir para hacer commit*/

`git add .`
/*Si en el status dice que hay cambios realizados usan el add . (el punto significa todos los cambios realizados ojo: TODOS los cambios realizados) HAGAN ESTO ANTES DEL COMMIT*/

`git commit -m "Aquí ingresas una descripción de los cambios que has hecho"`
/*Con esto subes los cambios que añadiste en el add PORFA NO OLVIDEN PONER SU DESCRIPCION DE CAMBIOS ENTRE COMILLAS*/

`git push origin nombre_de_rama`
/*Subes tus cambios al github para que todos lo podamos ver*/

`git checkout main`
`git pull origin`
/*regresa al main y trae la version más reciente para que no haya conflictos cuando subas tu parte*/

`git merge nombre_de_rama`
/*fusionala con el main para que el repositorio completo se actualice*/

/*(si hay conflictos al hacer el merge, corrígelos, haz add y commit para completar la fusion)*/

`git checkout nombre_rama`
`git push origin nombre_rama`
/*Después de hacer merge con la principal, regresas a tu rama y haces push para que se actualice el repositorio con los cambios más recientes*/

/*Vas a github y creas un pull request DE TU RAMA para que todos aceptemos tus cambios y estemos al día. Una vez aceptado, TODOS debemos actualizar el main con un git pull origin main desde tu rama y volver a actualizar con pull en la rama main (esto es para que los cambios no nos interrumpan y evitar tener que modificar todo por conflictos de código)*/

EL PULL REQUEST SOLO ES PARA CAMBIOS MUY GRANDES OSEA AL FINAL DE QUE UNA FUNCIONALIDAD ESTÉ COMPLETA, es decir, si haces cambios pequeños solo haces push en tu rama y lo dejas ahí, ya cuando termines una funcinalidad completa o muchos cambios importantes haces el pull request

seguir el proceso hasta que saquemos 20 xd

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
