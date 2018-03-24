import path from 'path'
import { app, BrowserWindow, screen, ipcMain } from 'electron'
import windowStateKeeper from 'electron-window-state'
import MenuBuilder from './menu'
import installDevtools from './installDevtools'

// Keep global reference to window object(s)
let mainWindow
let winState = null

// Ensure single instance

const ensureSingleInstance = () => {

  const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
    if (!mainWindow) return
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  })
  if (shouldQuit) app.quit()
}

// Open window

const openWindow = (config) => {

  // Set up window state

  const defaultSize = screen.getPrimaryDisplay().workAreaSize

  winState = windowStateKeeper({
    defaultWidth: defaultSize.width || 800,
    defaultHeight: defaultSize.height || 600
  })

  mainWindow = new BrowserWindow({
    show: false, // See hook for ready-to-show below
    width: 800, //winState.width,
    height: 600, //winState.height,
    x: winState.x,
    y: winState.y,
    backgroundColor: '#ffffff'
    // webPreferences: { nodeIntegration: false }
  })
}

// Menu

const buildMenu = config => {

  const menuBuilder = new MenuBuilder(mainWindow)

  menuBuilder.buildMenu(config)
}

// App-specific API

const createAPI = config => {

  const { isDev, api } = config

  return async (e, data = {}) => {

    console.log('api', { data })

    const { name, ...props } = data

    if (!api[name]) {
      mainWindow.webContents.send('apiError', {
        message: `API function "${name}" not found`
      })
      return
    }

    try {
      const response = await api[name](props)
      if (response) mainWindow.webContents.send('api', response)
    } catch (e) {
      mainWindow.webContents.send('apiError', e.message)
    }
  }
}

const setupWindowEvents = config => {

  const { isDev } = config

  const apiCallback = createAPI(config)

  // Unsubscribed on closed event below
  ipcMain.on('api', apiCallback)


  // On window close

  mainWindow.on('closed', () => {

    ipcMain.removeListener('api', apiCallback)

    // Dereference window object
    mainWindow = null
  })

  // On window ready

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
    if (!isDev) return
    if (mainWindow.openDevTools) mainWindow.openDevTools()
  })
}

const loadDocument = config => {

  const { rootPath } = config

  // Load document

  mainWindow.loadURL(`file://${rootPath}/index.html`)

  winState.manage(mainWindow)

}

const startLiveReload = () => {
  const { enableLiveReload } = require('electron-compile')
  enableLiveReload({ strategy: 'react-hmr' })
}

const startTron = async (props = {}) => {

  const isDev = process.execPath.match(/[\\/]electron/)
  const config = {
    isDev,
    rootPath: path.join(__dirname, '..'),
    productName: 'App',
    api: {},
    ...props
  }

  const createMainWindow = async () => {

    await ensureSingleInstance()

    // Dev tools - open when window ready
    //if (isDev)
    await installDevtools()

    await openWindow(config)

    await buildMenu(config)

    await setupWindowEvents(config)

    await loadDocument(config)
  }

  // Enable live reload

  if (isDev) await startLiveReload(config)

  // Catch unhandled errors

  process.on('uncaughtException', e => {
    console.log('uncaughtException', e)
    process.exit(1)
  })

  // Unhandled promise rejection
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
    process.exit(1)
  })


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
    //if (mainWindow === null) createMainWindow()
  })

  return new Promise((resolve, reject) => {

  // When Electron has finished initialization and is ready
  // to create browser windows. Some APIs can only be used
  // after this event occurs.
    app.on('ready', () => {
      createMainWindow()
      resolve()
    })

  })
}

module.exports = startTron