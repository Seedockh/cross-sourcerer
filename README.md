# cross-sourcerer

> Cross-platform Sourcerer Copycat

### Author
Pierre Hérissé

This app runs with Electron.

#### Run dev mode

``` bash
cd cross-sourcerer

# install dependencies
yarn

# serve with hot reload at localhost:9080
yarn dev

```

#### Build Electron App

``` bash
cd cross-sourcerer

# install dependencies
yarn

# build electron application for production
yarn build

```

#### Lint source code

``` bash
# lint all JS/Vue component files in `src/`
yarn lint
```


#### Create executable App with Electron-Packager

``` bash
cd cross-sourcerer

# install dependencies
yarn

# Install CLI
yarn add electron-packager -g

# build electron application for production
yarn build

# create app for any platform
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]

```

Any question ? (Find the documentation here)[https://github.com/electron/electron-packager]

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
