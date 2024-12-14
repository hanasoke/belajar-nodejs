const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('hanasoke@gmail.com'));
// console.log(validator.isMobilePhone('085819536458', 'id-ID'));
// console.log(validator.isNumeric('078234567g'));

// console.log(chalk.bgYellow.white.italic('Hello World!'));
const nama = 'Hanas';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.strikethrough sit amet} constructur {bgMagentaBright.italic adipisicing} elit. Nama Saya : ${nama}`;
console.log(pesan);
