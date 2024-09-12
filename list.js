let list = {
    brandname: '',
    name: '',
    CC: '',
    years: '',
    price: 0,
}

let brandname = ['Toyota', 'Honda', 'Daihatsu', 'Nissan', 'Mitsubishi', 'Hino']
let name = ['Avanza', 'Brio', 'Xenia', 'Skyline', 'L300', 'Hino 700']
let cc = ['1300', '1200','1000', '2600', '2268', '12913']
let years = ['2010', '2016', '2022', '2021', '2019', '2024']
let price = [1000, 5000, 13455, 34531, 423234, 13467]
//buat push
let data = [
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "id": 1},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "id": 2},
    {"brandname": "Daihatsu", "name": "Xenia", "cc": 1000, "years": 2022, "price": 13455, "id": 3},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "id": 4},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "id": 5},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "id": 6},
    
]

// TAMBAH DATA MOBIL
function createDataBaru(){

    let brandName = document.getElementById('brandname').value;
    let model = document.getElementById('name').value;
    let CC = document.getElementById('CC').value;
    let years = document.getElementById('years').value;
    let price = document.getElementById('price').value;

    if (brandName && model && cc && years && price){
        let idData = data.length === 0 ? 1 : data[data.length - 1] + 1;

        let dataBaru = {
            brandname: brandname,
            name: model,
            CC: CC,
            years: years,
            price: price,
            id: idData
        }

        data.push(dataBaru);
        
        // console.log(data);
        // render(data);
    } else {
        alert(`DATA HARUS DIISI! NIAT JUALAN GAK SIH?`);
    }
}

// SORT BERDASAR ABJAD
function urutkanNamaAtoZ(){
    sortedName = data.sort((a, b) => a.name > b.name ? 1 : -1);
    mencetak(sortedName);
}

function urutkanNamaZtoA(){
    sortedName = data.sort((a, b) => a.name < b.name ? 1 : -1);
    mencetak(sortedName);
}

// SORT BERDASAR BRAND
function urutkanBrandAtoZ(){
    sortedBrand = data.sort((a, b) => a.brandname > b.brandname ? 1 : -1);
    mencetak(sortedBrand);
}

function urutkanBrandZtoA(){
    sortedBrand = data.sort((a, b) => a.brandname < b.brandname ? 1 : -1);
    mencetak(sortedBrand);
}

