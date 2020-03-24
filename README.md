# cross-sourcerer

> Cross-platform Sourcerer Copycat

![https://image.noelshack.com/fichiers/2020/13/1/1585002853-logo.png](https://image.noelshack.com/fichiers/2020/13/1/1585002853-logo.png)

## Author
`Pierre Hérissé`

## Setup
This will require a `.env` file to be runable. To fill this `.env`, you need to add an [OAuth App](https://github.com/settings/developers) to add this App. 

Basic endpoint will be `http://localhost:9080`

Then you will have a `CLIENT_ID` and a `CLIENT_SECRET` specific for this app.

Here is a pattern `.env` file to put to the `./cross-sourcerer` directory :
``` env
GITHUB_CLIENT_ID=YOUR_CLIENT_ID
GITHUB_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

## Overview

This project aims to be a copycat of Sourcerer as a cross-platform Electron App. Github fetching done with GraphQL.

### Authentication

![https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs0.png](https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs0.png)

### Profile

![https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs1.png](https://image.noelshack.com/fichiers/2020/13/1/1585002974-cs1.png)

![https://image.noelshack.com/fichiers/2020/13/2/1585004666-cs2.png](https://image.noelshack.com/fichiers/2020/13/2/1585004666-cs2.png)

---

This app runs with Electron.

## Run in dev mode

``` bash
cd cross-sourcerer

# install dependencies
yarn

# serve with hot reload at localhost:9080
yarn dev

```

## Build Electron App

``` bash
cd cross-sourcerer

# install dependencies
yarn

# build electron application for production
yarn build

```

## Lint source code

``` bash
# lint all JS/Vue component files in `src/`
yarn lint
```


## Create executable App with Electron-Packager

``` bash
cd cross-sourcerer

# install dependencies
yarn

# Install CLI
yarn add electron-packager -g

# build electron application for production
yarn build

# create app for any platform
electron-packager . cross-sourcerer --platform=<platform> --arch=<arch>

- for Windows :
   - electron-packager . cross-sourcerer --platform=win32 --arch=x64
- for MacOS :
   - electron-packager . cross-sourcerer --platform=darwin --arch=x64
- for Linux :
   - electron-packager . cross-sourcerer --platform=linux --arch=x64  
- for all platforms :
   - electron-packager . cross-sourcerer --all
```

Any question ? [Find the documentation here](https://github.com/electron/electron-packager)


