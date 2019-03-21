var _0x4899 = [
  'BrowserWindow',
  'screen',
  'getPrimaryDisplay',
  '#00BCD4',
  'loadURL',
  'format',
  'join',
  'file:',
  'once',
  'ready-to-show',
  'ceil',
  'highlights.html',
  'setIgnoreMouseEvents',
  'closed',
  'ready',
  'checkForUpdatesAndNotify',
  'window-all-closed',
  'darwin',
  'quit',
  'activate',
  'quit-application',
  'uncaughtException',
  'log',
  'electron',
  'electron-updater',
  'ipcMain'
];
(function (_0x355457, _0x10a0b4) {
  var _0x5f1ee2 = function (_0x4d7e5c) {
    while (--_0x4d7e5c) {
      _0x355457['push'](_0x355457['shift']());
    }
  };
  _0x5f1ee2(++_0x10a0b4);
}(_0x4899, 0xe7));
var _0x2bf3 = function (_0xf6cbc1, _0x18f65b) {
  _0xf6cbc1 = _0xf6cbc1 - 0x0;
  var _0x1f0602 = _0x4899[_0xf6cbc1];
  return _0x1f0602;
};
const electron = require(_0x2bf3('0x0'));
const path = require('path');
const url = require('url');
const { autoUpdater } = require(_0x2bf3('0x1'));
const ipc = electron[_0x2bf3('0x2')];
const app = electron['app'];
const BrowserWindow = electron[_0x2bf3('0x3')];
let mainWindow;
let highlightWindow;
function createWindow() {
  const { width, height } = electron[_0x2bf3('0x4')][_0x2bf3('0x5')]()['workAreaSize'];
  mainWindow = new BrowserWindow({
    'width': 0x0,
    'height': 0x0,
    'x': -0x19,
    'y': -0x21,
    'resizable': ![],
    'alwaysOnTop': !![],
    'frame': ![],
    'movable': ![],
    'skipTaskbar': !![],
    'backgroundColor': _0x2bf3('0x6'),
    'show': ![]
  });
  mainWindow[_0x2bf3('0x7')](url[_0x2bf3('0x8')]({
    'pathname': path[_0x2bf3('0x9')](__dirname, 'index.html'),
    'protocol': _0x2bf3('0xa'),
    'slashes': !![]
  }));
  mainWindow[_0x2bf3('0xb')](_0x2bf3('0xc'), () => {
    mainWindow['show']();
  });
  highlightWindow = new BrowserWindow({
    'width': 0x12c,
    'height': 0x12c,
    'x': Math[_0x2bf3('0xd')](width * 0.74),
    'y': Math[_0x2bf3('0xd')](height * 0.65),
    'alwaysOnTop': !![],
    'transparent': !![],
    'frame': ![],
    'movable': !![],
    'skipTaskbar': !![],
    'show': ![]
  });
  highlightWindow['loadURL'](url[_0x2bf3('0x8')]({
    'pathname': path[_0x2bf3('0x9')](__dirname, _0x2bf3('0xe')),
    'protocol': _0x2bf3('0xa'),
    'slashes': !![]
  }));
  highlightWindow[_0x2bf3('0xb')](_0x2bf3('0xc'), () => {
    highlightWindow['show']();
  });
  highlightWindow[_0x2bf3('0xf')](!![]);
  mainWindow['on'](_0x2bf3('0x10'), () => {
    mainWindow = null;
  });
  highlightWindow['on'](_0x2bf3('0x10'), () => {
    highlightWindow = null;
  });
}
app['on'](_0x2bf3('0x11'), function () {
  createWindow();
  autoUpdater[_0x2bf3('0x12')]();
});
app['on'](_0x2bf3('0x13'), () => {
  if (process['platform'] !== _0x2bf3('0x14')) {
    app[_0x2bf3('0x15')]();
  }
});
app['on'](_0x2bf3('0x16'), () => {
  if (mainWindow === null) {
    createWindow();
  }
});
ipc['on'](_0x2bf3('0x17'), function (_0x3c264f) {
  app[_0x2bf3('0x15')]();
});
process['on'](_0x2bf3('0x18'), function () {
  console[_0x2bf3('0x19')]('');
});