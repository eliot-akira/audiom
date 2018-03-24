/*
 * @package MicroStreamJS (micro-stream)
 */
'use strict'

import { Stream, StreamObserver, StreamReducer } from './stream.class.js'

const stream = (val = {}) => {

  const s = Stream.of()

  let subscriber

  s.getState = () => (s.value() || {})
  s.setState = state => s.push({
    ...s.value(),
    ...state
  })
  s.onStateChange = (fn) => {
    if (!subscriber) subscriber = s.subscribe()
    subscriber.tap(fn)
  }

  return s
}

// Export main class Stream and a helper for inspections.
export { Stream, StreamObserver, StreamReducer }
export default stream

module.exports = stream
