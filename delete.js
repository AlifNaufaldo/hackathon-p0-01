

let data = [
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "id": 1},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "id": 2},
    {"brandname": "Daihatsu", "name": "Xenie", "cc": 1000, "years": 2022, "price": 13455, "id": 3},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "id": 4},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "id": 5},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "id": 6},
    
]

// console.log(data)
// syntax || array.findIndex(function(currentValue, index, arr), thisValue)
// findIndex: mencari elemen dalam array yang memenuhi kriteria tertentu dan mengembalikan indeks dari elemen tersebut.

//



function deleteById(dataArray, hapusID) {
    // console.log(data)
    let indexDiHapus = -1;
    
    for (let x = 0; x < dataArray.length; x++) {
        if (dataArray[x].id === hapusID) {
            indexDiHapus = x;
            break; 
        }
    }
    if (indexDiHapus !== -1) {
        dataArray.splice(indexDiHapus, 1);
        console.log(`Data dengan ID ${hapusID} telah dihapus.`);
    } else {
        console.log(`Data dengan ID ${hapusID} tidak ditemukan.`);
    }
}

deleteById(data, 5);

// console.log(data);


