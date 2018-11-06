# Electron What Is It Good For

## Prerequisites

1. [Node.js](https://nodejs.org/en/) is installed

## Initialize the Project

1. Create a folder for your project.
1. Run `npm init -y`
    * The `-y` inits the package.json file with defaults rather than the wizard.
1. Create a `src` folder and a `main.js` inside of it.
1. Edit `package.json`
    * Change the `main` property to be `src/main.js`
    * Add `start` to the `scripts` property with a value of `electron .`
1. Install the `electron-prebuilt` package to our *dev dependencies* by running `npm install electron --save-dev`
1. Create a folder `src` and a `main.js` file in it.
1. Add the following code to `main.js`
    ```js
    const electron = require('electron');
    const app = electron.app;

    app.on('ready', _ => {
        console.log('I\'m ready for anything!');
    });
    ```
1. Now make sure it works by running `npm start`.
1. Verify that the app starts and prints **I'm ready for anything!**

## Add Window

1. Open `src\main.js` and edit it as follows:
    ```js
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
    ```
1. Create `src\wiigf.html` and add the desired html.
1. Create `src\wiigf.css` and add the desired styles.