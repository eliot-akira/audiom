import startTron from './lib/tron'
import api from './api'
import { productName } from '../package.json'

startTron({
  rootPath: __dirname,
  productName,
  api
})
  .then(() => {

    // App ready

  })
  .catch(e => console.error(e))
