require('dotenv').config()
const path = require('path')
const url = require('url')
const electron = require('electron')

const BrowserWindow = electron.BrowserWindow
const app = electron.app

let mainWindow

function createMainWindow() {

  mainWindow = new BrowserWindow({
    title: process.env.APP_NAME,
    width: 400,
    height: 600,
    backgroundColor: '#303030'
  })

  if (process.env.ENV === 'production') {
    mainWindow.loadURL(path.join('file://', __dirname, '/dist'))
  } else {
    mainWindow.loadURL(process.env.HOST)
    mainWindow.webContents.openDevTools({mode: 'undocked'})
  }

  mainWindow.on('closed', function() {
    mainWindow = null
  })

}

app.on('ready', createMainWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createMainWindow()
  }
})
