const App = ({ state, action }) =>
  <div>
    { state.count }
    <button onClick={() => action('add')}>+</button>
  </div>

App.initState = {
  count: 1
}

App.actions = require('./actions')

export default App