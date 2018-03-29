const { ipcRenderer, remote } = require('electron')

const clientAPI = {
  init() {
    ipcRenderer.on('api', (e, data) => {
      console.log('api response', data)
    })
    ipcRenderer.send('api', { name: 'init' })
  }
}
