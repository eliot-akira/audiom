import { Provider, Heading, Button, Flex, Box, Slider } from 'rebass'
import { injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
const App = ({ state, action }) =>
  <Provider theme={theme}>
    <Box
      width={1}
      p={2}
      color='light-gray'
      bg='dark-gray-blue'
      style={ { height: '100vh' } }
    >

      <Box>{ state.tempo } BPM</Box>

      <Slider min={40} max={200} onChange={e => {
        console.log('slide', e.target.value)
        action('setTempo', { tempo: e.target.value })
      }}/>

    </Box>

  </Provider>

Object.assign(App, require('./actions'))

export default App

//      <Button onClick={() => action('add')}>{ state.count }</Button>
