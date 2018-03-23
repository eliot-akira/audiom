const path = require('path')

export default {
  init() {

    const {
      NodeAudio,
      GainNode,
      SoundBuffer
    } = require('naudio')

    const ctx = NodeAudio.makeAudioContext()
    const gainNode = new GainNode(ctx.sampleRate())

    gainNode.gain().setValue(1)
    gainNode.connect(ctx, ctx.destination(), 0, 0)

    const staticDir = path.join(__dirname, '..', '..', 'static')
    const getSoundPath = file => path.join(staticDir, file)

    const buffer = new SoundBuffer(
      getSoundPath('test.wav'),
      ctx.sampleRate()
    )

    setInterval(() => {
      console.log('x')
      buffer.playOnNode(ctx, gainNode, 0)
    }, 1000)

  },
  add({ state, setState }) {
    setState({ count: ++state.count })
  }
}