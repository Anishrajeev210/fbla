const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadURL('https://anishfbla.herokuapp.com/FblaServlet')
}

app.on('ready', createWindow)

