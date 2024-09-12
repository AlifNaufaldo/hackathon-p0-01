// Fungsi untuk mengonversi harga dalam format string menjadi angka
function convertToNumber(hargaStr) {
  // Menghapus simbol mata uang dan koma
  let cleanedStr = hargaStr.replace(/[^0-9]/g, '');
  return parseFloat(cleanedStr);
}

let harga = ["$30,000", "$15,000", "$50,000", "$25,000", "$10,000"];

// Mengurutkan harga dari yang tertinggi ke yang terendah
harga.sort((a, b) => convertToNumber(b) - convertToNumber(a));

console.log(harga);
// Output: ["$50,000", "$30,000", "$25,000", "$15,000", "$10,000"]
