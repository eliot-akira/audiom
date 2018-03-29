const React = require('react')
const { render } = require('react-dom')
const { AppContainer } = require('react-hot-loader')

const el = document.getElementById('App')
const { getState, setState, onStateChange, createAction } = require('lib/state')()

let App = require('./App')
let action = createAction(App.actions)

const refresh = () => render(
  <AppContainer children={
    <App {...{ state: getState(), getState, action }}/>
  } />,
  el
)

onStateChange(refresh)
setState(App.createState())
action('init')

// Hot-module replacement
if (module.hot) module.hot.accept(() => {
  //action('beforeReload')
  App = require('./App')
  action = createAction(App.actions)
  refresh()
  //action('afterReload')
})
