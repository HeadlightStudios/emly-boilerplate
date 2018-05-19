var path = require("path");

var url = require("url");

var events = require("events");

var electron = require("electron");

let mainWindow;

function createWindow() {

  mainWindow = new electron.BrowserWindow({ width: 1280, height: 768 });

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
    if (newUrl.indexOf('.auth0.com/mobile') > -1) {
      var hash = newUrl.substr(newUrl.indexOf('#') + 1);
    
      mainWindow.loadURL(url.format({
        pathname:  path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true,
        hash: hash
      }));
    }
  });
 
  mainWindow.loadURL(startUrl);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

electron.app.on("ready", function () {
  createWindow();
});

electron.app.on('window-all-closed', function () {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});