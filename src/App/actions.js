const { ipcRenderer } = require('electron')

export const initState = {
  count: 1,
  tempo: 60
}

export const actions = {
  init() {

    ipcRenderer.on('api', (e, data) => {

      console.log('api response', data)
    })

    ipcRenderer.send('api', { name: 'init' })

  },
  beforeReload() {

    console.log('beforeReload')

  },
  afterReload() {

    console.log('afterReload')

  },
  setTempo({ tempo, setState }) {
    setState({ tempo })
  },
  add({ state, setState }) {
    setState({ count: ++state.count })
  }
}
