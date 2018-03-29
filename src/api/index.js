
// API on server-side / main process

const { app } = require('electron')

let initDone = false

const init = () => {

  if (initDone) return
  initDone = true

  const {
    NodeAudio,
    //GainNode,
    //PluginNode,
    //StereoPannerNode,
    //SoundBuffer
  } = require('naudio')

  console.log('Init node audio')

  let ctx = NodeAudio.makeAudioContext()

  app.on('before-quit', (e) => {

    if (app.reallyQuit) return

    e.preventDefault()

    //console.log('Quitting', pluginNode ? true: false)
    //clearInterval(timer)

    /*console.log('Clean up')

console.log('Shutdown plugin')
if (pluginNode) {
  //pluginNode.disconnect()
  pluginNode.shutdown()
}

console.log('Disconnect nodes')
gainNode.disconnect(ctx)

pluginNode.disconnect(ctx)
panNode.disconnect(ctx)
*/

    console.log('Disconnect')
    ctx.destination().disconnectAll(ctx)

    console.log('CleanupAudioContext')
    NodeAudio.cleanupAudioContext(ctx)

    ctx = null

    console.log('DONE')

    app.reallyQuit = true
    app.quit()
  })

}

module.exports = {

  init,

}