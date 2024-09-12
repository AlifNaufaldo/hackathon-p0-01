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
    {"brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000},
    {"brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000},
    {"brandname": "Daihatsu", "name": "Xenie", "cc": 1000, "years": 2022, "price": 13455},
    {"brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531},
    {"brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234},
    {"brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467},
    
]



function createDataBaru(input, data){
    

    let brandName = document.getElementById('brandname').value;
    let model = document.getElementById('model').value;
    let CC = document.getElementById('CC').value;
    let years = document.getElementById('years').value;
    let price = document.getElementById('price').value;

    if (input.brandName && input.model && input.CC && input.years && input.price){
        let databaru = {
            brandname: input.brandName,
            name: input.model,
            cc: input.CC,
            years: input.years,
            price: input.price
        }

        data.push(databaru)
    }

    else{
        return `DATA HARUS DIISI! NIAT JUALAN GAK SIH?`
    }

    return data
}

console.log(createDataBaru(input, data));
