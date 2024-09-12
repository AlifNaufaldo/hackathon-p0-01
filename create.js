document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('cars');
    const carForm = document.getElementById('car-form');

    // Data awal mobil
    let data = [
        {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000},
        {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000},
        {"brandname": "Daihatsu", "name": "Xenia", "cc": 1000, "years": 2022, "price": 13455},
        {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531},
        {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234},
        {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467}
    ];

    // Fungsi untuk menambah data mobil baru
    carForm.onsubmit = function() {
        const brandname = document.getElementById('brand').value;
        const name = document.getElementById('model').value;
        const cc = document.getElementById('cc').value;
        const years = document.getElementById('years').value;
        const price = document.getElementById('price').value;

        if (brandname && name && cc && years && price) {
            
            const newCar = {
                brandname: brandname,
                name: name,
                cc: Number(cc),
                years: Number(years),
                price: Number(price)
            };


            data[data.length] = newCar;


            displayCars();


            document.getElementById('brand').value = '';
            document.getElementById('model').value = '';
            document.getElementById('cc').value = '';
            document.getElementById('years').value = '';
            document.getElementById('price').value = '';
        }

        return false;
    };

    function displayCars() {
        carList.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.textContent = data[i].brandname + ' - ' + data[i].name + ' - ' + data[i].cc + 'cc - ' + data[i].years + ' - Rp' + data[i].price.toFixed(2);
            carList.appendChild(li);
        }
    }

    displayCars();
});
