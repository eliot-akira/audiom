import { app, BrowserWindow } from 'electron'

// Global reference to the window object
let mainWindow

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) {
  const { enableLiveReload } = require('electron-compile')
  enableLiveReload({ strategy: 'react-hmr' })
}

const createWindow = async () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  if (isDevMode) {

    // Open DevTools

    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer')

    await installExtension(REACT_DEVELOPER_TOOLS)
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    // Dereference the window object. Usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// When Electron has finished initialization and is ready
// to create browser windows. Some APIs can only be used
// after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform !== 'darwin')

  app.quit()
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  //if (mainWindow === null) createWindow()
})
