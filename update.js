/*
update data penjualan mobil dari yang sudah ada
update data mobil
delete mobil jika sudah terjual atau tidak ingin dijual

*/

function cariId(params) {
 
}

function editCars(text, edit) {
  let result = "";
  let part = false;
  let editLength = edit.length;
  let editIndex = 0;

  for (let x = 0; x < text.length; x++) {
    if (!part) {
      if (text[x] === edit[editIndex]) {
        editIndex++;

        if (editIndex === editLength) {
          part = true;
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

function editText(text) {
  let result = "";

  for (let x = 0; x < text.length; x++) {
    if (text[x] === "") {
      result += text[x];
    }
  }
  return result;
}

function editedCar(carId) {
 const brandText = document.getElementById(carId + "Brand").textContent;
 const typeText = document.getElementById(carId + "Type").textContent;
 const capacityText = document.getElementById(carId + "Capacity").textContent;
 const yearText = document.getElementById(carId + "Year").textContent;
 const priceText = document.getElementById(carId + "Price").textContent;

 const brand = editCars(brandText, "Brand Name: ");
 const type = editCars(typeText, "Type: ");
 const capacity = editCars(capacityText, "Engine Capacity: ");
 const year = editCars(yearText, "Years: ");
 const price = editText(editCars(priceText, "Price: Rp. "));

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

 document.getElementById(currentCarId + "Brand").textContent = "Brand Name: " + brand;
 document.getElementById(currentCarId + "Type").textContent = "Type: " + type;
 document.getElementById(currentCarId + "Capacity").textContent = "Engine Capacity: " + capacity;
 document.getElementById(currentCarId + "Year").textContent = "Years: " + year;
 document.getElementById(currentCarId + "Price").textContent = "Price: Rp " + price;

 document.getElementById("editForm").style.display = "none";
}

function cancelEdit() {
 document.getElementById("editForm").style.display = "none";
}
