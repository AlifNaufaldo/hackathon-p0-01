let data = [
  { "brandname": "Toyota", "name": "Avanza", "cc": 1300, "years": 2010, "price": 1000, "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Favanza-berapa-cc.png&w=3840&q=75" },
  { "brandname": "Honda", "name": "Brio", "cc": 1200, "years": 2016, "price": 5000, "image": "https://dealermobilhondabanjarmasin.com/wp-content/uploads/2018/09/Honda-Brio-Banjarmasin-4.jpg" },
  { "brandname": "Daihatsu", "name": "Xenie", "cc": 1000, "years": 2022, "price": 13455, "image": "https://asset-2.tstatic.net/tribunnews/foto/bank/images/daihatsu-xenia1.jpg" },
  { "brandname": "Nissan", "name": "Skyline", "cc": 2600, "years": 2021, "price": 34531, "image": "https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/skyline-to-gt-r/2024-nissan-gtr-special-edition.jpg.ximg.l_6_h.smart.jpg" },
  { "brandname": "Mitsubishi", "name": "L300", "cc": 2268, "years": 2019, "price": 423234, "image": "https://www.sunstarmotor.id/wp-content/uploads/2020/05/l300-web-catalogue-458x420.jpg" },
  { "brandname": "Hino", "name": "Hino 700", "cc": 12913, "years": 2024, "price": 13467, "image": "https://hino.co.id/assets/uploads/categories_child/unit_home-2023-03.png" },
]

function mencetak() {
  const cetak = document.getElementById('cetak')

  cetak.innerHTML = ""

  for (let i = 0;i < data.length;i++) {
    let perMobil = data[i]

    let { brandname, name, cc, years, price, image } = perMobil

    cetak.innerHTML += `
    <div class="card text-center mb-3">
      <img class="card-img-top" src="${image}" alt="${brandname}" style="width: 100%; height: auto; object-fit: contain; max-height: 100%;/>
      <div class="card-body">
      <div>
        <h5 class="card-title">${brandname}</h5>
        <p class="card-text">${name} ${years} ${cc / 1000}L </p>
        <p class="card-text">Rp${price}
        <a href="#" class="btn btn-primary">Beli</a>
        <a href="#" class="btn btn-secondary" on click>Detail</a>
        </div>
      </div>
    </div>
  `
  }
}
