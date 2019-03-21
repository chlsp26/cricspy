var _0x35a1 = [
    'mouseenter',
    'http://cricspy.com',
    'pragma:\x20no-cache\x0a',
    'once',
    'ready-to-show',
    'show',
    'mouseleave',
    'hide',
    'click',
    'dblclick',
    'send',
    'quit-application',
    'electron',
    'getElementById',
    'notifyBtn',
    'ipcRenderer',
    'addEventListener'
];
(function (_0x24a786, _0x24d1c4) {
    var _0x54072e = function (_0x2eb84e) {
        while (--_0x2eb84e) {
            _0x24a786['push'](_0x24a786['shift']());
        }
    };
    _0x54072e(++_0x24d1c4);
}(_0x35a1, 0x1a4));
var _0x5d8f = function (_0x2b5a8a, _0x436bdc) {
    _0x2b5a8a = _0x2b5a8a - 0x0;
    var _0x1b8cf1 = _0x35a1[_0x2b5a8a];
    return _0x1b8cf1;
};
const electron = require(_0x5d8f('0x0'));
const BrowserWindow = electron['remote']['BrowserWindow'];
const notifyBtn = document[_0x5d8f('0x1')](_0x5d8f('0x2'));
const ipc = electron[_0x5d8f('0x3')];
let win;
let i = ![];
notifyBtn[_0x5d8f('0x4')](_0x5d8f('0x5'), function (_0x3d6d7e) {
    if (win == null) {
        win = new BrowserWindow({
            'width': 0x190,
            'height': 0x1e0,
            'alwaysOnTop': !![],
            'resizable': ![],
            'movable': !![],
            'skipTaskbar': !![],
            'show': ![]
        });
        url = _0x5d8f('0x6');
        var _0x57d55d = win['webContents'];
        _0x57d55d['loadURL'](url, { 'extraHeaders': _0x5d8f('0x7') });
    }
    win[_0x5d8f('0x8')](_0x5d8f('0x9'), () => {
        win[_0x5d8f('0xa')]();
    });
    win['on']('closed', () => {
        win = null;
        i = ![];
    });
});
notifyBtn[_0x5d8f('0x4')](_0x5d8f('0xb'), function (_0x2dcda6) {
    if (i == ![])
        win[_0x5d8f('0xc')]();
});
notifyBtn['addEventListener'](_0x5d8f('0xd'), function (_0x3eb334) {
    i = !i;
});
notifyBtn[_0x5d8f('0x4')]('mouseover', function (_0x4e07ba) {
    win[_0x5d8f('0xa')]();
});
notifyBtn[_0x5d8f('0x4')](_0x5d8f('0xe'), function () {
    ipc[_0x5d8f('0xf')](_0x5d8f('0x10'));
});