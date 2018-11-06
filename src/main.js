const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow = null;

app.on('ready', _ => {
  // Initialize our main browser window.
  mainWindow = new BrowserWindow({});

  // Load your root html file into the browser window.
  mainWindow.loadURL(`file://${__dirname}/wiigf.html`);

  // Cleanup after mainWindow is closed.
  mainWindow.on('closed', _ => {
    mainWindow = null;
  });
});
