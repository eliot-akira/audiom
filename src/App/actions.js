const createMetronome = require('lib/mooz/metronome')

export const createState = () => ({
  count: 1,
  volume: 40,
  tempo: 80,
  timeSignature: '4/4',
  isPlaying: false,
  isPaused: false
})

let metronome

export const actions = {

  init({ state }) {

    console.log('createMetronome')
    metronome = createMetronome()
    metronome.setTempo(state.tempo)
    metronome.setVolume(state.volume)
  },
  beforeReload() {

    console.log('beforeReload')

    // Unsubscribe

  },
  afterReload() {

    console.log('afterReload')

    // Resubscribe

  },

  setVolume: ({ volume, setState }) => {
    metronome.setVolume(volume)
    setState({ volume })
  },

  setTempo: ({ tempo, setState }) => {
    metronome.setTempo(tempo)
    setState({ tempo })
  },

  setTimeSignature: ({ timeSignature, setState }) => setState({ timeSignature }),

  play({ setState }) {
    metronome.start()
    setState({ isPlaying: true, isPaused: false })
  },

  stop({ setState }) {
    metronome.stop()
    setState({ isPlaying: false, isPaused: false })
  },

  pause({ setState }) {
    metronome.pause()
    setState({ isPlaying: false, isPaused: true })
  }
}
