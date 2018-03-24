// https://github.com/electron-userland/electron-forge/#config
module.exports = {
  make_targets: {
    darwin: [
      'zip',
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
    derefSymlinks: false,
    ignore: [
      // RegEx to match against absolute path of file/directory
      /\/naudio\/third_party/,
      /\/forge\//,
    ],
  },

  // https://github.com/electron/electron-rebuild

  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: '',
    name: '',
  },
  /*electronWinstallerConfig: {
    name: 'audiom',
  },
  windowsStoreConfig: {
    packageName: '',
    name: 'audiom',
  },*/
}
