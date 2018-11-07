const electron = require('electron');
const path = require('path');

const { app, BrowserWindow, Menu, Tray, globalShortcut } = electron;

let mainWindow = null;

function getFocus() {
  console.log('Doing Show Main Window');
  mainWindow.show();
}

function buildTray() {
  const tray = new Tray(path.join('src', 'SingleCupLogo.png'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Thing 1',
      click: _ => {
        console.log('Clicked Thing 1');
      }
    },
    {
      label: 'Thing 2',
      click: _ => {
        console.log('Clicked Thing 2');
      }
    },
    {
      label: 'Show Main Window',
      click: _ => {
        getFocus();
      }
    }
  ]);
  tray.setContextMenu(contextMenu);
  tray.setToolTip('Electron WIIGF');
}

function registerShortcuts(globalShortcut) {
  globalShortcut.unregisterAll();
  globalShortcut.register('CmdOrCtrl+Alt+C', _ => {
    getFocus();
  })
}

app.on('ready', _ => {

  buildTray();
  registerShortcuts(globalShortcut);

  // Initialize our main browser window.
  mainWindow = new BrowserWindow({});

  // Load your root html file into the browser window.
  mainWindow.loadURL(`file://${__dirname}/wiigf.html`);

  // Cleanup after mainWindow is closed.
  mainWindow.on('closed', _ => {
    mainWindow = null;
  });

});

  // Cleanup when app closes
  app.on('will-quit', _ => {
    globalShortcut.unregisterAll();
  });