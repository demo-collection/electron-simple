import {app, BrowserWindow} from 'electron';
import * as path from 'path';

let mainWindow: any;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false, // 这个可以设置为false, 当监听ready-to-show 的时候， 再展开， 可以防止闪烁
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // 是否集成node
      webviewTag: true,
    },
  });

  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});

