require('dotenv').config()

const config   = require('./config.js')
const path     = require('path')
const url      = require('url')
const electron = require('electron')
const Store    = require('electron-store')

const BrowserWindow = electron.BrowserWindow
const app           = electron.app
const ipc           = electron.ipcMain
const settings      = new Store()
const podcasts      = new Store({"name": "podcasts"})

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

  ipc.on('settings.set', function(event, args) {
    event.sender.send('settings.set', settings.set(args))
  })

  ipc.on('settings.get', function(event, args) {
    var _default = null;
    if (config.defaults.hasOwnProperty(args)) {
      _default = config.defaults[args]
    }
    event.sender.send('settings.get', settings.get(args, _default))
  })

  ipc.on('podcasts.all', function(event, args) {
    event.sender.send('podcasts.all', podcasts.get('podcasts'));
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
