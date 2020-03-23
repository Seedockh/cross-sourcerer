# cross-sourcerer

> Cross-platform Sourcerer Copycat

![https://image.noelshack.com/fichiers/2020/13/1/1585002853-logo.png](https://image.noelshack.com/fichiers/2020/13/1/1585002853-logo.png)

### Author
`Pierre Hérissé`

### Overview

#### Authentication

![https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs0.png](https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs0.png)

#### Profile

![https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs1.png](https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs1.png)

![https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs2.png](https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs2.png)

---

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

Any question ? [Find the documentation here](https://github.com/electron/electron-packager)


