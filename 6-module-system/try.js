function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

// console.log(cetakNama('Hanas'));
const PI = 3.14;

const mahasiswa = {
  nama: 'Hanas',
  umur: '25',
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya berusia ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log('Object orang telah dibuat!!');
  }
}
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang };
