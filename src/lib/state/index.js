module.exports = function createStateManager() {

  let state = {}
  let action
  const listeners = []

  const getState = () => state

  const setState = (newState, options = {}) => {

    if (options.reset) state = newState
    else Object.assign(state, newState)

    if (!options.silent) listeners.forEach(fn => fn(state))
  }

  const onStateChange = (fn) => {

    listeners.push(fn)

    const unsubscribe = () => {
      const i = listeners.indexOf(fn)
      if (i < 0) return
      listeners.splice(i, 1)
    }

    return unsubscribe
  }

  const createAction = (actions) =>  {

    action = (name, props = {}) => actions[name]({
      state: getState(),
      getState, setState,
      action,
      ...props
    })

    return action
  }

  return {
    getState, setState, onStateChange, createAction
  }
}