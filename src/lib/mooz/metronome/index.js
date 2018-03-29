const createScheduler = require('../transport/createScheduler')

function createTimer(props = {}) {

  const audioContext = props.audioContext || new AudioContext()
  const scheduler = createScheduler({ audioContext })

  const timer = {
    scheduler
  }

  const state = {
    audioContext,
    tempo: 60, // beats per miute
    beat: 0, // beat count: 0 = stopped, 1 = start of first beat
    timeSignature: {
      beatsPerBar: 4, beatUnit: 4 // 4/4
    }
  }

  function startLoop({ playbackTime }) {

    const t0 = playbackTime
    const t1 = t0 + (60 / state.tempo) // Next beat

    // Tick
    scheduler.insert(t0 + 0, tick)
    scheduler.insert(t1, startLoop)

    // Schedules
  }

  function tick(e) {

    const {
      playbackTime,
      position,
      args
    } = e

    timer.emit('scheduleBeat', {
      beat: state.beat+1,
      playbackTime, position
    })

    timer.next(playbackTime, () => {
      state.beat++
      //console.log(`tick ${state.beat}`, position, e)
    })
  }


  Object.assign(timer, {
    audioContext,
    state,
    start() {
      if (scheduler.isPlaying) return
      const { events } = scheduler
      if (scheduler.isPaused) {
        console.log('resume', events)
        scheduler.start()
      } else {
        state.beat = 0
        scheduler.start(startLoop)
        console.log('start', events)
      }
    },
    pause() {
      scheduler.pause()
    },
    stop() {
      scheduler.stop()
      state.beat = 0
    },
    on: scheduler.on.bind(scheduler),
    off: scheduler.off.bind(scheduler),
    emit: scheduler.emit.bind(scheduler),
    next: scheduler.nextTick.bind(scheduler),
    setTempo(val) {
      if (!val || val < 5 || val > 300) return
      state.tempo = val
      console.log('tempo', val)
    }
  })

  return timer
}

let metronome
let masterGain

module.exports = function createMetronome() {

  if (!metronome) metronome = createTimer()
  const { audioContext } = metronome

  if (!masterGain) {
    masterGain = audioContext.createGain()
    masterGain.connect(audioContext.destination)
    //masterGain.gain.value = state.volume / 100
  }

  metronome.on('scheduleBeat', e => {

    const { playbackTime, beat } = e

    metronome.next(playbackTime, () => {
      console.log(`beat ${beat}`)
    })


    const t0 = playbackTime
    const t1 = t0 + .1
    const osc = audioContext.createOscillator()
    const amp = audioContext.createGain()

    osc.frequency.value = beat % 4===1 ? 880 : 440
    //osc.frequency.setTargetAtTime(frequency, t0, .01)
    osc.start(t0)
    osc.stop(t1)
    osc.connect(amp)

    amp.gain.setValueAtTime(0.8, t0)
    amp.gain.exponentialRampToValueAtTime(1e-6, t1)
    amp.connect(masterGain)

    metronome.next(t1, () => {
      osc.disconnect()
      amp.disconnect()
    })
  })

  metronome.setVolume = volume =>
    masterGain.gain.value = volume / 100


  return metronome
}