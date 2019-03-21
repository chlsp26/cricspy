var _0x29a9 = [
  'highlights.html',
  'setIgnoreMouseEvents',
  'closed',
  'ready',
  'checkForUpdatesAndNotify',
  'window-all-closed',
  'platform',
  'darwin',
  'quit',
  'activate',
  'quit-application',
  'electron',
  'path',
  'electron-updater',
  'app',
  'BrowserWindow',
  'getPrimaryDisplay',
  'workAreaSize',
  '#0000ff',
  'loadURL',
  'index.html',
  'file:',
  'once',
  'ready-to-show',
  'show',
  'ceil',
  'format',
  'join'
];
(function (_0x157e3f, _0x2407fa) {
  var _0x827290 = function (_0x599c5f) {
    while (--_0x599c5f) {
      _0x157e3f['push'](_0x157e3f['shift']());
    }
  };
  _0x827290(++_0x2407fa);
}(_0x29a9, 0x1cb));
var _0x49ca = function (_0x34526d, _0x20e442) {
  _0x34526d = _0x34526d - 0x0;
  var _0x384aad = _0x29a9[_0x34526d];
  return _0x384aad;
};
const electron = require(_0x49ca('0x0'));
const path = require(_0x49ca('0x1'));
const url = require('url');
const { autoUpdater } = require(_0x49ca('0x2'));
const ipc = electron['ipcMain'];
const app = electron[_0x49ca('0x3')];
const BrowserWindow = electron[_0x49ca('0x4')];
let mainWindow;
let highlightWindow;
function createWindow() {
  const { width, height } = electron['screen'][_0x49ca('0x5')]()[_0x49ca('0x6')];
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
    'backgroundColor': _0x49ca('0x7'),
    'show': ![]
  });
  mainWindow[_0x49ca('0x8')](url['format']({
    'pathname': path['join'](__dirname, _0x49ca('0x9')),
    'protocol': _0x49ca('0xa'),
    'slashes': !![]
  }));
  mainWindow[_0x49ca('0xb')](_0x49ca('0xc'), () => {
    mainWindow[_0x49ca('0xd')]();
  });
  highlightWindow = new BrowserWindow({
    'width': 0x12c,
    'height': 0x12c,
    'x': Math[_0x49ca('0xe')](width * 0.74),
    'y': Math[_0x49ca('0xe')](height * 0.65),
    'alwaysOnTop': !![],
    'transparent': !![],
    'frame': ![],
    'movable': !![],
    'skipTaskbar': !![],
    'show': ![]
  });
  highlightWindow['loadURL'](url[_0x49ca('0xf')]({
    'pathname': path[_0x49ca('0x10')](__dirname, _0x49ca('0x11')),
    'protocol': _0x49ca('0xa'),
    'slashes': !![]
  }));
  highlightWindow['once'](_0x49ca('0xc'), () => {
    highlightWindow[_0x49ca('0xd')]();
  });
  highlightWindow[_0x49ca('0x12')](!![]);
  mainWindow['on'](_0x49ca('0x13'), () => {
    mainWindow = null;
  });
  highlightWindow['on'](_0x49ca('0x13'), () => {
    highlightWindow = null;
  });
}
app['on'](_0x49ca('0x14'), function () {
  createWindow();
  autoUpdater[_0x49ca('0x15')]();
});
app['on'](_0x49ca('0x16'), () => {
  if (process[_0x49ca('0x17')] !== _0x49ca('0x18')) {
    app[_0x49ca('0x19')]();
  }
});
app['on'](_0x49ca('0x1a'), () => {
  if (mainWindow === null) {
    createWindow();
  }
});
ipc['on'](_0x49ca('0x1b'), function (_0x325097) {
  app[_0x49ca('0x19')]();
});
process['on']('uncaughtException', function () {
  console['log']('');
});