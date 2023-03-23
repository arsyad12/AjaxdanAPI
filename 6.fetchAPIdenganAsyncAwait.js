
//buat dulu variabel/fungsi nya secara asynchronous
const requestPeople = async()=>{
    //bikin variabel request untuk get data API
    const request = await fetch('https://swapi.dev/api/people/1/')
    //bikin variabel datauntuk menampung data dari API tadi tapi rubah dulu ke bentuk json
    const data = await request.json()
    //panggil data
    console.log(data)
}

//panggil fungsi nya
requestPeople()



// contoh fetch API dengan Async Await dan error hendler menggunakan try and catch
//buat dulu variabel/fungsi nya secara asynchronous

const requestPeople2 = async()=>{

    try {
        
  
    //bikin variabel request untuk get data API
    const request = await fetch('https://swapi.dev/api/peopleas/2/')//ini yang bikin eror 
    //bikin variabel datauntuk menampung data dari API tadi tapi rubah dulu ke bentuk json
    const data = await request.json()
    //panggil data
    console.log(data)

} catch (error) {
    console.log('undifend',error)
}

}

//panggil fungsi nya
requestPeople2()