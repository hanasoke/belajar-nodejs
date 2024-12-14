// console.log('Hello Hanas');
// const nama = 'Hanas Bayu Pratama';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); // core module
// const cetakNama = require('./try'); // local module
// const moment = require('momen'); // third party module / npm modul / node_modules

// console.log('Hello Hanas');

// const PI = require('./try');
const coba = require('./try');

console.log(coba.cetakNama('Hanas'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
