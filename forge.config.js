const path = require('path')

// https://github.com/electron-userland/electron-forge/#config

module.exports = {
  make_targets: {
    darwin: [
      'zip',
      //
    ],
    /*linux: [
      'deb',
      'rpm',
    ],
    win32: [
      'squirrel',
    ],*/
  },

  // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md

  electronPackagerConfig: {
    //packageManager: 'yarn',
    icon: './icons/icon',
    derefSymlinks: true,
    ignore:
    // TODO: Make this a function and ignore all unnecessary stuff like devDependencies
    [
      // RegEx to match against absolute path of file/directory
      /\/naudio\/third_party\//,
      /\.hardlinks$/,
    ],

    // Disable compiling Sass partials
    // https://github.com/electron-userland/electron-compilers/pull/81
    // https://github.com/electron-userland/electron-compile/pull/260

    afterPrune: [(buildPath, electronVersion, platform, arch, callback) => {

      const { execSync } = require('child_process')
      execSync('npm install github:eliot-akira/electron-compile#built', {
        cwd: path.join(buildPath, 'node_modules')
      })

      callback()
    }]
  },

  // https://github.com/electron/electron-rebuild
/*

  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: '',
    name: '',
  },
  electronWinstallerConfig: {
    name: 'audiom',
  },
  windowsStoreConfig: {
    packageName: '',
    name: 'audiom',
  },*/
}
