const nama = "Rasya";
let usia = 13;

let biodata = document.getElementById("biodata");

function generateBiodata() {
  let generasi;

  if (usia > 10 && usia < 18) {
    // false
    generasi = "generasi remaja";
  } else if (usia > 18 && usia < 30) {
    generasi = "generasi dewasa";
  } else if (usia >= 30) {
    generasi = "generasi tua";
  } else if (usia > 1 && usia < 10) {
    generasi = "generasi bayi";
  } else {
    generasi = "generasi anak anak";
  }

  return (biodata.innerHTML = generasi);
}

console.log(usia);
console.log(nama);

generateBiodata();
