const { app, BrowserWindow } = require('electron');
require('dotenv').config();

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/lstna/assets/logo.png`
  });

  if (process.env.NODE_ENV !== 'prod') {
    win.webContents.toggleDevTools();
  }


  win.loadURL(`file://${__dirname}/dist/lstna/index.html`);

  // Event when the window is closed.
  win.on('closed', () => {
    win = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});
