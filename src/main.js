const electron = require('electron');
const path = require('path');

const { app, BrowserWindow, Menu, Tray } = electron;

let mainWindow = null;

function buildTray()
{
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
      }
  ])
  tray.setContextMenu(contextMenu);
  tray.setToolTip('Electron WIIGF');
}

app.on('ready', _ => {

  buildTray();

  // Initialize our main browser window.
  mainWindow = new BrowserWindow({});

  // Load your root html file into the browser window.
  mainWindow.loadURL(`file://${__dirname}/wiigf.html`);

  // Cleanup after mainWindow is closed.
  mainWindow.on('closed', _ => {
    mainWindow = null;
  });
});
