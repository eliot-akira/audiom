# Audiom

Electron-based modular music-making app with native audio libraries

## Goals

- Native bindings to [JUCE](https://www.juce.com/), [LabSound](http://labsound.io)
- Ability to host Audio Unit / VST instruments and effects
- User modules written in HTML, CSS, JS

  For example:
  - MIDI monitor
  - Arpeggiator
  - Rhythm sequencer

## Develop

Platform: confirmed working on macOS only (for now)

Requirement: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and included package manager [npm](https://www.npmjs.com/)

#### Clone repo

```sh
git clone git@github.com:eliot-akira/audiom.git
cd audiom
```

#### Install dependencies

```sh
npm install
```

#### Start development

Build the app, watch for file change and recompile/reload. The first time it is run, it needs to build native audio libraries - it will take time.

```sh
npm run start
```

#### Build app

Build app in folder `out` - needs to rebuild native libs.

```sh
npm run build
```


## Credits

- [electron-forge](https://github.com/electron-userland/electron-forge)
- [node-audio](https://github.com/ramirezd42/node-audio)
