
const WebAudioScheduler = require('./scheduler')
const timerAPI = require('./scheduler/timer')

const createScheduler = (props = {}) => {

  const sched = new WebAudioScheduler({
    context: props.audioContext || new AudioContext(),
    timerAPI: props.timerAPI || timerAPI
  })

  // Browser background tab
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      sched.aheadTime = 0.1
    } else {
      sched.aheadTime = 1.0
      sched.process()
    }
  })

  return sched
}

module.exports = createScheduler