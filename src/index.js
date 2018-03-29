import api from './api'
import { productName } from '../package.json'

require('module').globalPaths.push(__dirname)

require('lib/tron')(({ isDev }) => ({
  rootPath: __dirname,
  productName,
  api,
  mainWindow: {
    ...(isDev ? {} : { width: 500, height: 180 }),
    //useContentSize: true,
    resizable: isDev
  }
}))
  .then(() => {

    // App ready

  })
  .catch(e => console.error(e))
