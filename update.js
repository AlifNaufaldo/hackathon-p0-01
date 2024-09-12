let currentCarId = null;

let data = [
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "id": 1},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "id": 2},
    {"brandname": "Daihatsu", "name": "Xenia", "cc": 1000, "years": 2022, "price": 13455, "id": 3},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "id": 4},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "id": 5},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "id": 6},
];

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
