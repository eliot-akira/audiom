
const installDevtools = async () => {

  const devtools = require('electron-devtools-installer')

  const forceDownload = !!process.env.UPGRADE_EXTENSIONS

  const installer = devtools.default
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ]

  return Promise
    .all(extensions.map(name => installer(devtools[name], forceDownload)))
    .catch(console.log)
}

module.exports = installDevtools