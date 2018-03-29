const Emitter = require('../Emitter')
//const { EventEmitter } = require('events')

function defaults(value, defaultValue) {
  return value !== undefined ? value : defaultValue
}

class WebAudioScheduler extends Emitter {

  constructor(opts = {}) {

    super()

    this.context = defaults(opts.context, {
      get currentTime() {
        return Date.now() / 1000
      }
    })

    this.interval = defaults(opts.interval, 0.025)
    this.aheadTime = defaults(opts.aheadTime, 0.1)
    this.timerAPI = defaults(opts.timerAPI, global)

    this.playbackTime = 0
    this.startTime = 0
    this.pausedTime = 0
    this.lastPostion = 0

    this._timerId = 0
    this._schedId = 0
    this._scheds = []
  }

  get state() {
    return this._timerId !== 0 ? 'running' : 'suspended'
  }

  get currentTime() {
    return this.context.currentTime
  }
  /*
  get position() {
    if (this.state==='running') {
      return this.lastPlayedPosition //this.context.currentTime - this.startTime
    }
    if (this.pausedTime) {
      return this.lastPlayedPosition//this.pausedTime - this.startTime
    }
    return 0
  }
*/

  get events() {
    return this._scheds.slice()
  }


  get isPlaying() {
    return this.state!=='suspended'
  }
  get isPaused() {
    return this.state==='suspended' && this.pausedTime
  }
  get isStopped() {
    return this.state==='suspended' && !this.pausedTime
  }

  start(callback, args) {

    if (!this.pausedTime) {

      // Start

      console.log('SCH:START')
      this.startTime = this.context.currentTime
      this.lastPosition = 0
      this.emit('start')

    } else {

      // Resume

      const diffTime = this.context.currentTime - this.pausedTime

      // Adjust schedule

      const scheds = this._scheds

      for (let i = 0, len = scheds.length; i < len; i++) {
        scheds[i].time += diffTime
      }

      this.startTime += diffTime
      this.pausedTime = 0
      this.emit('resume')
    }


    if (this._timerId === 0) {

      // Start loop

      const loop = this.process.bind(this)
      this._timerId = this.timerAPI.setInterval(loop, this.interval * 1000)

      if (callback) {
        this.insert(this.context.currentTime, callback, args)
        loop()
      }

    } else {
      // Loop running already
      if (callback) {
        this.insert(this.context.currentTime, callback, args)
      }
    }

    return this
  }

  pause() {
    if (this.state!=='running') return
    this.stop(false)
    this.emit('pause')
    this.pausedTime = this.startTime + this.lastPosition
    //this.playbackTime //this.context.currentTime
  }

  stop(reset = true) {

    this.pausedTime = 0
    this.lastPostion = 0

    if (this._timerId !== 0) {
      this.timerAPI.clearInterval(this._timerId)
      this._timerId = 0
      if (reset && this.state==='running') this.emit('stop')
    }

    if (reset) {
      this._scheds.splice(0)
    }

    return this
  }

  insert(time, callback, args) {
    const id = ++this._schedId
    const event = { id, time, callback, args }
    const scheds = this._scheds

    if (scheds.length === 0 || scheds[scheds.length - 1].time <= time) {
      scheds.push(event)
    } else {
      for (let i = 0, len = scheds.length; i < len; i++) {
        if (time < scheds[i].time) {
          scheds.splice(i, 0, event)
          break
        }
      }
    }

    return id
  }

  nextTick(time, callback, args) {

    if (typeof time === 'function') {
      args = callback
      callback = time
      time = this.playbackTime
    }

    return this.insert(time + this.aheadTime, callback, args)
  }

  remove(schedId) {
    const scheds = this._scheds

    if (typeof schedId === 'number') {
      for (let i = 0, imax = scheds.length; i < imax; i++) {
        if (schedId === scheds[i].id) {
          scheds.splice(i, 1)
          break
        }
      }
    }

    return schedId
  }

  removeAll() {
    this._scheds.splice(0)
  }

  process() {

    if (this.pausedTime) return

    const t0 = this.context.currentTime
    const t1 = t0 + this.aheadTime

    const scheds = this._scheds
    const playbackTime = t0

    this.playbackTime = playbackTime
    this.emit('process', { playbackTime })

    while (scheds.length && scheds[0].time < t1) {

      const event = scheds.shift()
      const playbackTime = event.time
      const position = playbackTime - this.startTime
      const args = event.args

      this.lastPosition = position
      this.playbackTime = playbackTime

      event.callback({ playbackTime, args, position })
    }

    this.playbackTime = playbackTime
    this.emit('processed', { playbackTime })
  }
}

module.exports = WebAudioScheduler