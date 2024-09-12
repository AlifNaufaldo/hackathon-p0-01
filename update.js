let currentCarId = null;

function editingCars(text, dataEdit) {
    let result = "";
    let dataPart = false;
    let dataEditLength = dataEdit.length;
    let dataEditIndex = 0;

    
    for (let x = 0; x < text.length; x++) {
        if (!dataPart) {            
            if (text[x] === dataEdit[dataEditIndex]) {
                dataEditIndex++;
                
                if (dataEditIndex === dataEditLength) {
                    dataPart = true;
                }
            } else {   
                break;
            }
        } else {
            result += text[x];
        }
    }
    return result;
}

function removeChar(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== '.') {
            result += text[i];
        }
    }
    return result;
}

function editCar(carId) {
  let data = [
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "id": 1},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "id": 2},
    {"brandname": "Daihatsu", "name": "Xenie", "cc": 1000, "years": 2022, "price": 13455, "id": 3},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "id": 4},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "id": 5},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "id": 6},
]
let selectedCar = null;

    for (let x = 0; x < data.length; x++) {
      if (data[x].id === carId) {
        selectedCar = data[x];
        break;
      }
    }

    if (selectedCar !== null) {
      return "Mobil ditemukan: " + ("Brand: " + selectedCar.brandname) + ("Name: " + selectedCar.name) + ("Engine Capacity: " + selectedCar.cc) + ("Years: " + selectedCar.years) + ("Price: Rp " + selectedCar.price);
    } else {
      console.log("Mobil dengan ID " + carId + " tidak ditemukan.");
    }

    const brandText = document.getElementById(carId + "Brand").textContent;
    const typeText = document.getElementById(carId + "Type").textContent;
    const capacityText = document.getElementById(carId + "Capacity").textContent;
    const yearText = document.getElementById(carId + "Year").textContent;
    const priceText = document.getElementById(carId + "Price").textContent;

    const brand = editingCars(brandText, "Brand: ");
    const type = editingCars(typeText, "Type: ");
    const capacity = editingCars(capacityText, "Kapasitas Mesin: ");
    const year = editingCars(yearText, "Tahun: ");
    const price = removeChar(editingCars(priceText, "Harga: Rp. "));

    document.getElementById("editBrand").value = brand;
    document.getElementById("editType").value = type;
    document.getElementById("editCapacity").value = capacity;
    document.getElementById("editYear").value = year;
    document.getElementById("editPrice").value = price;  
    
    document.getElementById("editForm").style.display = "block";
}

function saveEdit() {
    const brand = document.getElementById("editBrand").value;
    const type = document.getElementById("editType").value;
    const capacity = document.getElementById("editCapacity").value;
    const year = document.getElementById("editYear").value;
    const price = document.getElementById("editPrice").value;

    document.getElementById(currentCarId + "Brand").textContent = "Brand: " + brand;
    document.getElementById(currentCarId + "Type").textContent = "Type: " + type;
    document.getElementById(currentCarId + "Capacity").textContent = "Kapasitas Mesin: cc" + capacity;
    document.getElementById(currentCarId + "Year").textContent = "Tahun: " + year;
    document.getElementById(currentCarId + "Price").textContent = "Harga: Rp. " + price;

    document.getElementById("editForm").style.display = "none";
}

function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
}
