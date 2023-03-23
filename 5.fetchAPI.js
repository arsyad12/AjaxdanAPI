//Fetch adlaah cara baru untuk melakukan request via javascript
//Fetch mendukung Promise, dan bisa memanfaatkan Async Await


//fetch untuk request API, selama tidak ditambahkan method lain, nilai fetch adalah GET

fetch('https://swapi.dev/api/people/1/')

//jika berhasil mendapatkan data dari API maka result akan bernilai datadari API
.then((result) => {
   
    //jika result bernilai kebalikan dari ok maka akan menjalankan nilai throw
    if (!result.ok) {
       
        throw 'couldnot fetch data resource'
    }

    //jika result bernilai ok maka akan mendapatkan data, kemudian return dan rubah menjadi bentuk json seperti dibawah

    return result.json()

//menangkap data return.json denga memasukannya ke variabel data, kemudian tinggal dipanggil

.then((data) => {

    console.log('Request data 1',data)

//kalau mau request lagi return  dulu API nya 

    return fetch('https://swapi.dev/api/people/2/')

})


.then((result) => {
    if (!result.ok) {
       
        throw 'couldnot fetch data resource'
    }

    return result.json()
})


.then((data) => {
    console.log('Request data 2',data)
})





}).catch((err) => {
    
});