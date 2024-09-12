// let list = {
//     brandname: '',
//     name: '',
//     cc: '',
//     years: '',
//     price: 0,
// }

let brandname = ['Toyota', 'Honda', 'Daihatsu', 'Nissan', 'Mitsubishi', 'Hino']
let name = ['Avanza', 'Brio', 'Xenia', 'Skyline', 'L300', 'Hino 700']
let cc = ['1300', '1200', '1000', '2600', '2268', '12913']
let years = ['2010', '2016', '2022', '2021', '2019', '2024']
let price = [1000, 5000, 13455, 34531, 423234, 13467]
//buat push
let data = [
    { "brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "image": "https://akcdn.detik.net.id/visual/2019/02/28/a02dae3a-28ca-49ce-8596-2f165188872f_169.jpeg?w=650&q=90", "id": 1 },
    { "brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "image": "https://dealermobilhondabanjarmasin.com/wp-content/uploads/2018/09/Honda-Brio-Banjarmasin-4.jpg", "id": 2 },
    { "brandname": "Daihatsu", "name": "Xenia", "cc": 1000, "years": 2022, "price": 13455, "image": "https://asset-2.tstatic.net/tribunnews/foto/bank/images/daihatsu-xenia1.jpg", "id": 3 },
    { "brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "image": "https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/skyline-to-gt-r/2024-nissan-gtr-special-edition.jpg.ximg.l_6_h.smart.jpg", "id": 4 },
    { "brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "image": "https://www.sunstarmotor.id/wp-content/uploads/2020/05/l300-web-catalogue-458x420.jpg", "id": 5 },
    { "brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "image": "https://hino.co.id/assets/uploads/categories_child/unit_home-2023-03.png", "id": 6 },
]

let defaultImage = "https://www.freeiconspng.com/uploads/transport-car-icon--6.png"

// TAMBAH DATA MOBIL
function createDataBaru() {

    let brandName = document.getElementById('brandname').value
    let model = document.getElementById('name').value
    let cc = document.getElementById('cc').value
    let years = document.getElementById('years').value
    let price = document.getElementById('price').value
    let image = document.getElementById('image').value

    if (!brandName || !model || !cc || !years || !price) {
        alert(`DATA HARUS DIISI! NIAT JUALAN GAK SIH?`)
        return
    }

    if (brandName && model && cc && years && price) {
        let idData = data.length === 0 ? 1 : data[data.length - 1] + 1

        let dataBaru = {
            brandname: brandName,
            name: model,
            cc: cc,
            years: years,
            price: price,
            image: image ? image : defaultImage,
            id: idData
        }

        data.push(dataBaru)
        mencetak()
    }
}

// SORT BERDASAR ABJAD
function urutkanNamaAtoZ() {
    sortedName = data.sort((a, b) => a.name > b.name ? 1 : -1)
    mencetak(sortedName)
}

function urutkanNamaZtoA() {
    sortedName = data.sort((a, b) => a.name < b.name ? 1 : -1)
    mencetak(sortedName)
}

// SORT BERDASAR BRAND
function urutkanBrandAtoZ() {
    sortedBrand = data.sort((a, b) => a.brandname > b.brandname ? 1 : -1)
    mencetak(sortedBrand)
}

function urutkanBrandZtoA() {
    sortedBrand = data.sort((a, b) => a.brandname < b.brandname ? 1 : -1)
    mencetak(sortedBrand)
}

function filterhargaterendah() {

    data.sort((a, b) => a.price - b.price)

    mencetak(data)
}

// console.log(filterhargaterendah())

function filterhargatertinggi() {

    data.sort((a, b) => b.price - a.price)

    mencetak(data)
}

// console.log(filterhargatertinggi());

function deleteItem(button) {
    const card = button.closest('.card')
    card.remove()
}


function mencetak() {

    const cetak = document.getElementById('cetak')

    cetak.innerHTML = ""

    for (let i = 0;i < data.length;i++) {
        let perMobil = data[i]

        let { brandname, name, cc, years, price, image } = perMobil

        cetak.innerHTML += `
        <div class="card text-center mb-3">
          <img class="card-img-top" id="image" src="${image}" alt="${brandname}" style="width: 100%; height: auto; object-fit: contain; max-height: 100%;/>
          <div class="card-body">
          <div>
            <h5 class="card-title">${brandname}</h5>
            <p class="card-text">${name} ${years} ${cc / 1000}L </p>
            <p class="card-text">Rp${price}
        <a href="checkout.html?brandname=${brandname}&image=${image}&name=${name}&years=${years}&cc=${cc}&price=${price}" class="btn btn-primary">Beli Bang</a>
            <a href="#" class="btn btn-secondary" onclick="deleteItem(this)">Hapus</a>
            </div>
          </div>
        </div>
      `
    }
}
console.log(mencetak());
