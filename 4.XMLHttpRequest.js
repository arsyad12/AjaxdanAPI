// berguna untuk melakukan request ke API
// Cara ini adalah cara original dalam melakukan request ke API
//Cara ini tidak mendukung Promise dan Ribet


const request = new XMLHttpRequest();

//deklarasi variabel data dengan let, karena kalo const harus ada isi

let data

//request untuk mendapatkan nilai dari API
request.open('GET','https://swapi.dev/api/people/1/')


//fungsi saat mendapatkan nilai API

request.onload = function () {

    //merubah nilai API menjadi bentuk object json
    data = JSON.parse(this.response)
    
    console.log(data)
  
}


//fungsi yang dieksekusi saat gagal mendapatkan API
request.onerror = function () {
    console.log('error',this)
}


//harus mengirim permintaan dulu baru semua code diatas dieksekusi

request.send()
