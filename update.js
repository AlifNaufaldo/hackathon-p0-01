let currentCarId = null;

function editingCars(text, dataPreFix) {
    let result = "";
    let dataPart = false;
    let dataPreFixLength = dataPreFix.length;
    let dataPreFixIndex = 0;

    
    for (let x = 0; x < text.length; x++) {
        if (!dataPart) {            
            if (text[x] === dataPreFix[dataPreFixIndex]) {
                dataPreFixIndex++;
                
                if (dataPreFixIndex === dataPreFixLength) {
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
    currentCarId = carId;

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
