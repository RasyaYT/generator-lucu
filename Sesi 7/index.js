// Sesi 7

const http = require("http");
const rupiahFormat = require("rupiah-format");
const rp = require("rupiah-format");
const host = "127.0.0.1";
const port = 3002;

// Req = data masuk dri luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "rasya";
  let uang = 500000;
  let jajan = 100000;
  let sisa = uang - jajan;

  uang = rp.convert(uang);
  jajan = rp.convert(jajan);
  sisa = rp.convert(sisa);

  // const uangRp = rp.convert(uang);
  // const sisaRp = rp.convert(sisa);
  // const jajanRp = rp.convert(jajan);
  // console.log('sisa rupiah: ', sisaRp)

  const hasil = `halo nama saya ${nama}.uang jajan saya adalah ${uang} saya jajan ${jajan}, sekarang uang jajan saya tersisa ${sisa}`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server menyala di ${host}:${port}`);
});
