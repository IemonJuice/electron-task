const {app , BrowserWindow} = require('electron')
app.whenReady().then(( ) => {
  const myWindow = new BrowserWindow({
    width:500,
    height:500,
    webPreferences:{nodeIntegration:true}
  })
  myWindow.loadFile('index.html').then(r => r)
})
