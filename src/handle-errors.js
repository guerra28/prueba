const { app, dialog } = require('electron')

function relaunchApp (win) {
  dialog.showMessageBox(win, {
    type: 'error',
    title: 'Eco Agentes',
    message: 'Ocurrió un error inesperado, se reiniciará el aplicativo'
  }, () => {
    app.relaunch()
    app.exit(0)
  })
}

function setupErrors (win) {
  win.webContents.on('crashed', () => {
    relaunchApp(win)
  })

  win.on('unresponsive', () => {
    dialog.showMessageBox(win, {
      type: 'warning',
      title: 'Eco Agentes',
      message: 'Un proceso está tardando demasiado, puede esperar o reiniciar el aplicativo manualmente'
    })
  })

  process.on('uncaughtException', () => {
    console.log('paso algo')
    relaunchApp(win)
  })
}

module.exports = setupErrors