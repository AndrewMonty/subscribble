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
        width: 800,
        height: 600,
        backgroundColor: '#2d2c32'
    })

    if (process.env.ENV === 'production') {
        mainWindow.loadURL(path.join('file://', __dirname, '/dist'))
    } else {
        mainWindow.loadURL(process.env.HOST)
        mainWindow.webContents.openDevTools()
    }

    // prevent initial flash by hiding until the window is ready
    // mainWindow.once('ready-to-show', function() {
    //     mainWindow.show()
    // })

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
