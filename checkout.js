const urlParams = new URLSearchParams(window.location.search)
const brandname = urlParams.get('brandname')
const name = urlParams.get('name')
const image = urlParams.get('image')
const years = urlParams.get('years')
const cc = urlParams.get('cc')
const price = urlParams.get('price')
const checkout = document.getElementById('checkout')

cetak.innerHTML += `
    <div class="checkout">
      <img class="card-img-top" src="${image}" alt="${brandname}" style="width: 50%; height: auto; object-fit: contain; max-height: 100%;/>
      <div class="card-body">
      <div>
        <h5 class="card-title">${brandname}</h5>
        <p class="card-text">${name} ${years} ${cc / 1000}L </p>
        <p class="card-text-price">Rp${price}</p>
        <a href="#" class="btn btn-primary">di klik laku nih</a>
        </div>
      </div>
    </div>
  `
