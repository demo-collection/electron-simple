import { app, BrowserWindow } from 'electron';
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

  mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();


  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    // 在主进程中弹出菜单的一个示例
    // 很少在主进程这样做， 很少有这样的需求， 这里只是举一个例子而已
    // setTimeout(() => {
    //   const template: MenuItemConstructorOptions[] = [
    //     {
    //       label: '第一个菜单',
    //     },
    //     {
    //       label: '第2个菜单',
    //     },
    //     {
    //       role: 'undo',
    //     },
    //     {
    //       type: 'separator',
    //     },
    //     {
    //       label: '第3个菜单',
    //     },
    //     {
    //       label: '第4个菜单',
    //     },
    //   ];
    //
    //   const menu = Menu.buildFromTemplate(template);
    //   Menu.setApplicationMenu(menu);
    //   menu.popup();
    // }, 2000);

  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});

