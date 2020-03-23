'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import auth from 'electron-auth'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /** * Initial window options */
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 565,
    resizable: true,
    center: true,
    webPreferences: {
      devTools: true
    }
  })

  mainWindow.loadURL(winURL)
  mainWindow.setMenu(null)

  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.openDevTools()
    })
  }

  // When receiving request for login on Github
  ipcMain.on('github::auth', async (evt, arg) => {
    authGithub(evt)
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function authGithub (evt) {
  /** * Authenticate to Github API */
  // Initialize the github auth options
  const opt = { client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.GITHUB_CLIENT_SECRET, devTools: false }
  // Handle the github authentication
  return auth(auth.providers.github, opt, (error, token) => {
    if (error) return error
    if (token) evt.sender.send('github::token', token)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
