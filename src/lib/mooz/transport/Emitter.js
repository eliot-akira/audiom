
export default class Emitter {

  Emitter = Emitter
  _listeners = []

  on = (pattern, callback) => {
    this._listeners.push({ pattern, callback })
    return () => this.off(pattern, callback) // // Return unsubscriber
  }

  off = (pattern, callback) => {
    this._listeners = this._listeners.filter(l =>
      !(pattern===l.pattern && callback===l.callback)
    )
  }

  emit = (event, ...args) => {
    return this._listeners.map(listener => {

      const { pattern, callback } = listener
      if (!callback) return

      const matches = pattern instanceof RegExp
        ? event.match(pattern)
        : event===pattern

      if (!matches || (matches!==true && !matches.length)) {
        return
      }

      if (!args[0]) args.push({})
      if (typeof args[0]==='object') args[0].eventName = event

      return callback(...args)
    })
  }

  extend = function(obj, context) {
    const toThis = context || this // Inherit instance by default
    Object.keys(obj).forEach(key => {
      if ((obj[key] instanceof Function) && context) {
        toThis[key] = obj[key].bind(toThis)
      }
      toThis[key] = obj[key]}
    )
    return toThis
  }
}
