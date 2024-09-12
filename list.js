// let list = {
//     brandname: '',
//     name: '',
//     cc: '',
//     years: '',
//     price: 0,
// }

// let brandname = ['Toyota', 'Honda', 'Daihatsu', 'Nissan', 'Mitsubishi', 'Hino']
// let name = ['Avanza', 'Brio', 'Xenia', 'Skyline', 'L300', 'Hino 700']
// let cc = ['1300', '1200','1000', '2600', '2268', '12913']
// let years = ['2010', '2016', '2022', '2021', '2019', '2024']
// let price = [1000, 5000, 13455, 34531, 423234, 13467]
// //buat push
let data = [
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "image": "https://akcdn.detik.net.id/visual/2019/02/28/a02dae3a-28ca-49ce-8596-2f165188872f_169.jpeg?w=650&q=90","id": 1},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "image": "https://dealermobilhondabanjarmasin.com/wp-content/uploads/2018/09/Honda-Brio-Banjarmasin-4.jpg", "id": 2},
    {"brandname": "Daihatsu", "name": "Xenia", "cc": 1000, "years": 2022, "price": 13455, "image": "https://asset-2.tstatic.net/tribunnews/foto/bank/images/daihatsu-xenia1.jpg", "id": 3},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "image": "https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/skyline-to-gt-r/2024-nissan-gtr-special-edition.jpg.ximg.l_6_h.smart.jpg", "id": 4},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "image": "https://www.sunstarmotor.id/wp-content/uploads/2020/05/l300-web-catalogue-458x420.jpg", "id": 5},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "image": "https://hino.co.id/assets/uploads/categories_child/unit_home-2023-03.png", "id": 6},
    
]



// TAMBAH DATA MOBIL
function createDataBaru(){

    let brandName = document.getElementById('brandname').value;
    let model = document.getElementById('name').value;
    let cc = document.getElementById('cc').value;
    let years = document.getElementById('years').value;
    let price = document.getElementById('price').value;

    if (!brandName || !model || !cc || !years || !price) {
        alert(`DATA HARUS DIISI! NIAT JUALAN GAK SIH?`);
        return;
    }

    if (brandName && model && cc && years && price){
        let idData = data.length === 0 ? 1 : data[data.length - 1] + 1;      
        
        let dataBaru = {
            brandname: brandName,
            name: model,
            cc: cc,
            years: years,
            price: price,
            id: idData,
            image: "https://www.google.co.id/imgres?q=gambar%20mobil%20kartun%20no%20copyright&imgurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F44-447551_gambar-animasi-mobil-png.png&imgrefurl=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8H7i8b1i8m2A0_gambar-animasi-mobil-png%2F&docid=aIq_yEdAxCBVIM&tbnid=c0f6gWdXf32Q7M&vet=12ahUKEwir-6m8472IAxXLyzgGHa7bOPMQM3oFCIYBEAA..i&w=840&h=329&hcb=2&ved=2ahUKEwir-6m8472IAxXLyzgGHa7bOPMQM3oFCIYBEAA"
        }
        
        data.push(dataBaru);
        mencetak();
    } 
}

// function mesinCetak(){

// }


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

function filterhargaterendah(){

    data.sort((a, b) => a.price - b.price)

    render(data)
}

// console.log(filterhargaterendah())

function filterhargatertinggi(){

    data.sort((a, b) => b.price - a.price)
    
    mencetak(data)
}

// console.log(filterhargatertinggi());

// function deleteCar() {
// result = []
// let id = document.getElementById(`dihapus`)

// // let element = document.getElementById(`dihapus`);

// for (let i = 0; i < data.length; i++) {
//     let perData = data[i];

//     let idOrang = perData.id

//     if(id !== idOrang){
//     result.push(perData)
//     mencetak(result)
//     }

// }

// }

// function deleteFunction(){

//     let result = []
//     let idOrang = parseInt(document.getElementById('dihapus').value);

//     for(let x = 0; x < data.length; x++){
//         let perData = data[x]
//         console.log(perData);
        
//         if(perData.id !== idOrang ){
            
//             result.push(data[x])

//                
//             // data.splice(x, 1);
//             // break;
//         }
//      let idData = data.length === 0 ? 1 : data[data.length - 1] + 1;
        
//     }
//     mencetak(result)
// }

// function deleteData(id) {
//     let result = [];
    
//     for (let x = 0; x < data.length; x++) {
//         if (data[x].id !== id) {
//             result.push(data[x]);
//         }
//     }
//     data = result; 
   
//     const card = document.getElementById(`mobil-${id}`);
//     if (card) {
//         card.remove();
//         mencetak(data)
//     }
    
//    }

// function deleteFunction() {
//     let idOrang = parseInt(document.getElementById('dihapus').value); // Convert to number for comparison
//     let result = [];

//     for (let x = 0; x < data.length; x++) {
//         let perData = data[x];
//         console.log(perData);

//         // Compare numeric ID values
//         if (perData.id !== idOrang) {
//             result.push(perData); // Add to result if ID does not match
//         }
//     }

//     // Update the data array with the filtered results
//     data = result;

//     // Optional: Console log to verify changes
//     console.log(data);

//     // Optionally, call a render function to update the display
//     // render(data);
// }




function mencetak(){

    const cetak = document.getElementById(`cetak`)
    
    cetak.innerHTML = ""
    
    for (let i = 0;i < data.length;i++) {
      let perMobil = data[i]
    
      let { brandname, name, cc, years, price, image } = perMobil
    
      cetak.innerHTML += `
        <div class="card text-center mb-3">
          <img class="card-img-top" src="${image}" alt="${brandname}" style="width: 100%; height: auto; object-fit: contain; max-height: 100%;/>
          <div class="card-body" >
          <div>
            <h5 class="card-title">${brandname}</h5>
            <p class="card-text">${name} ${years} ${cc / 1000}L </p>
            <p class="card-text">Rp${price}
            <a href="#" class="btn btn-primary">Beli Bang</a>
            <a href="#" class="btn btn-secondary">Hapus </a>
            </div>
          </div>
        </div>
      `
    }
    // on-click="deleteFunction(${id})
    }
    console.log(mencetak());
   

    function editCar(carId) {
        currentCarId = carId;
    
        let selectedCar = null;
        for (let x = 0; x < data.length; x++) {
            if (data[x].id === carId) {
                selectedCar = data[x];
                break;
            }
        }
    
        if (selectedCar !== null) {
            document.getElementById("editBrand").value = selectedCar.brandname;
            document.getElementById("editType").value = selectedCar.name;
            document.getElementById("editCapacity").value = selectedCar.cc;
            document.getElementById("editYear").value = selectedCar.years;
            document.getElementById("editPrice").value = selectedCar.price;
            document.getElementById("editForm").style.display = "block";
        } else {
            console.log("Mobil dengan ID " + carId + " tidak ditemukan.");
        }
    }
    
    function saveEdit() {
        const brand = document.getElementById("editBrand").value;
        const type = document.getElementById("editType").value;
        const capacity = document.getElementById("editCapacity").value;
        const year = document.getElementById("editYear").value;
        const price = document.getElementById("editPrice").value;
    
        for (let x = 0; x < data.length; x++) {
            if (data[x].id === currentCarId) {
                data[x].brandname = brand;
                data[x].name = type;
                data[x].cc = capacity;
                data[x].years = year;
                data[x].price = price;
                break;
            }
        }
    
        document.getElementById("car" + currentCarId + "Brand").textContent = "Brand Name: " + brand;
        document.getElementById("car" + currentCarId + "Type").textContent = "Type: " + type;
        document.getElementById("car" + currentCarId + "Capacity").textContent = "Engine Capacity: " + capacity + "cc";
        document.getElementById("car" + currentCarId + "Year").textContent = "Years: " + year;
        document.getElementById("car" + currentCarId + "Price").textContent = "Price: Rp. " + price;
    
        document.getElementById("editForm").style.display = "none";
    }
    
    function cancelEdit() {
        document.getElementById("editForm").style.display = "none";
    }
    