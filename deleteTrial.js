//fungsi untuk menampilkan data ke dalam tabel

//fungsi penghapusan data berdasarkan ID
//kondisi saat req penghapusan data
//tr = baris tabel | td = sel tabel
// Dalam JavaScript, metode appendChild() digunakan untuk menambahkan elemen anak baru ke elemen induk yang sudah ada dalam HTML Document Object Model (DOM). Metode ini menambahkan elemen anak yang ditentukan sebagai anak terakhir dari elemen induk.

//

//fungsi untuk handle penghapusan data
//kosongkan input setelah dilakukan penghapusan data
//tampilkan data setelah dilakukan penghapusan

let data = [
  {
    brandname: "Toyota",
    name: "Avanza",
    cc: 1300,
    years: 2010,
    price: 1000,
    image:
      "https://akcdn.detik.net.id/visual/2019/02/28/a02dae3a-28ca-49ce-8596-2f165188872f_169.jpeg?w=650&q=90",
    id: 1,
  },
  {
    brandname: "Honda",
    name: "Brio",
    cc: 1200,
    years: 2016,
    price: 5000,
    image:
      "https://dealermobilhondabanjarmasin.com/wp-content/uploads/2018/09/Honda-Brio-Banjarmasin-4.jpg",
    id: 2,
  },
  {
    brandname: "Daihatsu",
    name: "Xenia",
    cc: 1000,
    years: 2022,
    price: 13455,
    image:
      "https://asset-2.tstatic.net/tribunnews/foto/bank/images/daihatsu-xenia1.jpg",
    id: 3,
  },
  {
    brandname: "Nissan",
    name: "Skyline",
    cc: 2600,
    years: 2021,
    price: 34531,
    image:
      "https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/skyline-to-gt-r/2024-nissan-gtr-special-edition.jpg.ximg.l_6_h.smart.jpg",
    id: 4,
  },
  {
    brandname: "Mitsubishi",
    name: "L300",
    cc: 2268,
    years: 2019,
    price: 423234,
    image:
      "https://www.sunstarmotor.id/wp-content/uploads/2020/05/l300-web-catalogue-458x420.jpg",
    id: 5,
  },
  {
    brandname: "Hino",
    name: "Hino 700",
    cc: 12913,
    years: 2024,
    price: 13467,
    image:
      "https://hino.co.id/assets/uploads/categories_child/unit_home-2023-03.png",
    id: 6,
  },
];

// Fungsi untuk menghapus data berdasarkan ID

function deleteCar(id) {
  let index = -1;

  for (let x = 0; x < data.length; x++) {
    if (data[x].id === id) {
      index = x;
      break;
    }
  }
  if (index !== -1) {
    data.splice(index, 1);
  }
  renderCarList();
}

// Fungsi untuk menampilkan data ke tabel
// function displayData(dataArray) {
//   let tableBody = document.getElementById("dataBody");
//   tableBody.innerHTML = ""; // Hapus data lama

//   // Buat elemen tabel untuk setiap item dalam dataArray
//   for (let i = 0; i < dataArray.length; i++) {
//     let item = dataArray[i];

//     //membuat baris
//     let row = document.createElement("tr");

//     //membuat elemen sel tabel
//     const brandCell = document.createElement("td");
//     const nameCell = document.createElement("td");
//     const ccCell = document.createElement("td");
//     const priceCell = document.createElement("td");
//     const yearsCell = document.createElement("td");
//     const idCell = document.createElement("td");

//     //innerText
//     brandCell.innerText = item.brandname;
//     nameCell.innerText = item.name;
//     ccCell.innerText = item.cc;
//     yearsCell.innerText = item.years;
//     priceCell.innerText = item.price;
//     idCell.innerText = item.id;

//     //menambahkan sell ke baris
//     row.appendChild(brandCell);
//     row.appendChild(nameCell);
//     row.appendChild(ccCell);
//     row.appendChild(yearsCell);
//     row.appendChild(priceCell);
//     row.appendChild(idCell);

//     tableBody.appendChild(row);
//   }
// }

// function deleteById(dataArray, idToDelete) {
//   let indexToDelete = -1;

//   for (let i = 0; i < dataArray.length; i++) {
//     if (dataArray[i].id === idToDelete) {
//       indexToDelete = i;
//       break;
//     }
//   }
//   let resultDelete = document.getElementById("result");

//   //kondisi hapus data dan data tidak ada
//   if (indexToDelete !== -1) {
//     dataArray.splice(indexToDelete, 1); // Hapus data
//     resultDelete.innerHTML = "Data dengan ID " + idToDelete + " telah dihapus.";
//   } else {
//     resultDelete.innerHTML =
//       "Data dengan ID " + idToDelete + " tidak ditemukan.";
//   }
//   displayData(dataArray); // Perbarui tabel setelah penghapusan
// }

// // Fungsi untuk menangani penghapusan
// function handleDelete() {
//   let deleteIdInput = document.getElementById("deleteId");
//   let deleteId = parseInt(deleteIdInput.value, 10);
//   if (isNaN(deleteId)) {
//     document.getElementById("result").innerHTML = "Masukkan ID yang valid.";
//     return;
//   }
//   deleteById(data, deleteId);
//   deleteIdInput.value = ""; // Kosongkan input setelah penghapusan
// }

// // Tampilkan data awal
// displayData(data);
