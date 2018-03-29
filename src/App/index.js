
const Section = ({ state, action, label, content, borderBottom = true }) =>
  <div className={`row p-2${
    !borderBottom ? '' : ' border-bottom border-color-light-gray-blue'
  }`}>
    <div className="col-sm-4">
      { label }
    </div>
    <div className="col-sm-8">
      { content }
    </div>
  </div>

const App = ({ state, action }) =>
  <div>
    <Section label={
      <div className="pr-2" style={{ lineHeight:'2rem', fontSize: '18px' }}>
        <div className="float-left align-middle">Metronome</div>
      </div>
    } content={
      <div style={{ lineHeight:'1rem' }}>
        { !state.isPlaying ?
          <a onClick={() => action('play' )}>
            <svg className="svg-icon align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785.7 1000"><path d="M772 517L31 929q-13 7-22 2t-9-20V89q0-14 9-20t22 2l741 412q13 7 13 17t-13 17z"/></svg>
          </a>
          :
          <a onClick={() => action('stop' )}>
            <svg className="svg-icon align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857.1 1000"><path d="M857 107v786q0 14-10 25t-26 11H36q-15 0-25-11T0 893V107q0-14 11-25t25-11h785q15 0 26 11t10 25z"/></svg>
          </a>
        }
      </div>
    } />
    <Section label={
      <div className="pr-2">
        <div className="float-left">Volume</div>
        <div className="float-right">{`${state.volume} %`}</div>
      </div>
    } content={
      <div className="range-height">
        <input className="align-middle" type="range"
          min={0} max={100} value={state.volume}
          onChange={e => action('setVolume', { volume: e.target.value })
          } />
      </div>
    } />
    <Section borderBottom={false} label={
      <div className="pr-2">
        <div className="float-left">Tempo</div>
        <div className="float-right">{`${state.tempo} BPM`}</div>
      </div>
    } content={
      <div className="range-height">
        <input className="align-middle" type="range"
          min={40} max={200} value={state.tempo}
          onChange={e => {
            action('setTempo', { tempo: e.target.value })
          }} />
      </div>
    } />
  </div>

Object.assign(App, require('./actions'))

export default App