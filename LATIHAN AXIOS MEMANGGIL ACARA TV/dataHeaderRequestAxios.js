const form = document.querySelector('#search-form') //ambil data form



form.addEventListener('submit',async (e)=>{ // saat form bernilai submit maka akan menjalan kan fungsi didalammnya

    e.preventDefault() // mencegah browser refresh atau pergi ke halaman lain 

document.querySelectorAll('img').forEach((img) => img.remove()); //membersihkan seluruh gambar yang ada sebelumnya




const keyword = form.elements.query.value //mengambil nilai yang diinput kedalam form


const config = { //memasukan nilai keywor kedalam fungsi konfig
   
    params :{ q : keyword}

}



const request = await axios.get(`http://api.tvmaze.com/search/shows`,config)//request API sesuai config yang berisi data dari keyword

// console.log(request.data.name)


getImage(request.data) //menangkap data berdasarkan fungsi yang sudah di set dibawah


form.elements.query.value = "" //mengosongkan form setelah berhasil mencari data


})



const getImage =(shows)=>{
for (let result of shows) {
    if (result.show.image) {
      
        const img = document.createElement('img')
        img.src = result.show.image.medium
        document.body.append(img)
        
    }
}
}