var _0x3929 = [
    'style',
    'display',
    'none',
    'val',
    'charAt',
    'innerText',
    'value',
    'Bat:\x20',
    'Score:\x20',
    'block',
    'https://kreeda-b5ea0.firebaseio.com',
    'kreeda-b5ea0',
    'kreeda-b5ea0.appspot.com',
    '458609287159',
    'initializeApp',
    'Runs',
    'getElementById',
    'Batsman',
    'Bowler',
    'Overs',
    'database',
    'ref',
    'child',
    'batsman',
    'bowler',
    'score',
    'overs',
    'high'
];
(function (_0x5137d3, _0x291d8c) {
    var _0x245bdd = function (_0x3a905f) {
        while (--_0x3a905f) {
            _0x5137d3['push'](_0x5137d3['shift']());
        }
    };
    _0x245bdd(++_0x291d8c);
}(_0x3929, 0x15a));
var _0x5561 = function (_0x4b336d, _0x2d67d6) {
    _0x4b336d = _0x4b336d - 0x0;
    var _0x32c0bf = _0x3929[_0x4b336d];
    return _0x32c0bf;
};
var config = {
    'apiKey': 'AIzaSyCkTJNw8hKOWn25XqWLbSjffzo0IuoE-NI',
    'authDomain': 'kreeda-b5ea0.firebaseapp.com',
    'databaseURL': _0x5561('0x0'),
    'projectId': _0x5561('0x1'),
    'storageBucket': _0x5561('0x2'),
    'messagingSenderId': _0x5561('0x3')
};
firebase[_0x5561('0x4')](config);
var Runs = document['getElementById'](_0x5561('0x5'));
var Batsman = document[_0x5561('0x6')](_0x5561('0x7'));
var Bowler = document[_0x5561('0x6')](_0x5561('0x8'));
var Score = document[_0x5561('0x6')]('Score');
var Overs = document['getElementById'](_0x5561('0x9'));
var dbRef1 = firebase[_0x5561('0xa')]()[_0x5561('0xb')]()[_0x5561('0xc')]('runs');
var dbRef2 = firebase[_0x5561('0xa')]()[_0x5561('0xb')]()[_0x5561('0xc')](_0x5561('0xd'));
var dbRef3 = firebase[_0x5561('0xa')]()[_0x5561('0xb')]()[_0x5561('0xc')](_0x5561('0xe'));
var dbRef4 = firebase[_0x5561('0xa')]()[_0x5561('0xb')]()[_0x5561('0xc')](_0x5561('0xf'));
var dbRef5 = firebase[_0x5561('0xa')]()['ref']()[_0x5561('0xc')](_0x5561('0x10'));
var x = document['getElementById'](_0x5561('0x11'));
var flag = !![];
var curRuns;
x[_0x5561('0x12')][_0x5561('0x13')] = _0x5561('0x14');
dbRef1['on']('value', _0xb973ca => {
    curRuns = _0xb973ca[_0x5561('0x15')]()[_0x5561('0x16')](0x0);
    if (curRuns == 0x4 || curRuns == 0x6 || curRuns == 'W') {
        Runs[_0x5561('0x17')] = curRuns;
        setOnFlag();
        setOffFlag();
    }
});
dbRef2['on'](_0x5561('0x18'), _0x1456f3 => Batsman['innerText'] = _0x5561('0x19') + _0x1456f3[_0x5561('0x15')]());
dbRef3['on'](_0x5561('0x18'), _0x273274 => Bowler['innerText'] = 'Ball:\x20' + _0x273274[_0x5561('0x15')]());
dbRef4['on'](_0x5561('0x18'), _0x3df2c6 => Score[_0x5561('0x17')] = _0x5561('0x1a') + _0x3df2c6[_0x5561('0x15')]());
dbRef5['on'](_0x5561('0x18'), _0x2e7800 => Overs[_0x5561('0x17')] = 'Overs:\x20' + _0x2e7800['val']());
function setOnFlag() {
    flag = !![];
    x[_0x5561('0x12')][_0x5561('0x13')] = _0x5561('0x1b');
}
function setOffFlag() {
    if (flag == !![])
        setTimeout(function () {
            if (flag == !![]) {
                x[_0x5561('0x12')]['display'] = 'none';
                flag = ![];
            }
        }, 0x1770);
}